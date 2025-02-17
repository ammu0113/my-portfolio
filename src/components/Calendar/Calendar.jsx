import React, { useState, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { gapi } from 'gapi-script';
import './Calendar.scss';

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availableSlots, setAvailableSlots] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID??"292367913085-p8jcd9qn3e390lbq007s0nprnk58scl3.apps.googleusercontent.com";
  const CALENDAR_ID = 'primary';

  useEffect(() => {
    const initializeGoogleAPI = async () => {
      try {
        await gapi.load('client:auth2');
        await gapi.client.init({
          clientId: GOOGLE_CLIENT_ID,
          scope: 'https://www.googleapis.com/auth/calendar.readonly',
          discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest']
        });
      } catch (error) {
        console.error('Error initializing Google API:', error);
      }
    };

    initializeGoogleAPI();
  }, [GOOGLE_CLIENT_ID]);

  const handleSuccess = async (credentialResponse) => {
    try {
      const token = credentialResponse.access_token;
      gapi.client.setToken({
        access_token: token
      });
      setIsAuthenticated(true);
      // Load initial available slots
      getAvailableSlots(selectedDate);
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  const handleError = () => {
    console.error('Login Failed');
    setIsAuthenticated(false);
  };

  const getAvailableSlots = async (date) => {
    if (!isAuthenticated) {
      console.log('User not authenticated');
      return;
    }

    try {
      const timeMin = new Date(date);
      timeMin.setHours(9, 0, 0, 0);
      
      const timeMax = new Date(date);
      timeMax.setHours(17, 0, 0, 0);

      const response = await gapi.client.calendar.events.list({
        calendarId: CALENDAR_ID,
        timeMin: timeMin.toISOString(),
        timeMax: timeMax.toISOString(),
        singleEvents: true,
        orderBy: 'startTime',
      });

      const events = response.result.items || [];
      const busySlots = events.map(event => ({
        start: new Date(event.start.dateTime || event.start.date),
        end: new Date(event.end.dateTime || event.end.date)
      }));

      // Generate available 30-minute slots
      const slots = [];
      let currentTime = new Date(timeMin);

      while (currentTime < timeMax) {
        const slotEnd = new Date(currentTime.getTime() + 30 * 60000);
        const isAvailable = !busySlots.some(busy => 
          (currentTime >= busy.start && currentTime < busy.end) ||
          (slotEnd > busy.start && slotEnd <= busy.end)
        );

        if (isAvailable) {
          slots.push({
            start: new Date(currentTime),
            end: slotEnd
          });
        }
        currentTime = slotEnd;
      }

      setAvailableSlots(slots);
    } catch (error) {
      console.error('Error fetching calendar events:', error);
    }
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    if (isAuthenticated) {
      getAvailableSlots(date);
    }
  };

  return (
    <section className="calendar">
      <div className="calendar__container">
        <h2 className="section-title">Schedule a Meeting</h2>
        
        {!isAuthenticated ? (
          <div className="calendar__auth">
            <p>Please sign in to view available slots</p>
            <GoogleLogin
              clientId={GOOGLE_CLIENT_ID}
              onSuccess={handleSuccess}
              onError={handleError}
              cookiePolicy={'single_host_origin'}
              scope="https://www.googleapis.com/auth/calendar.readonly"
            />
          </div>
        ) : (
          <div className="calendar__content">
            <div className="calendar__dates">
              {[...Array(7)].map((_, index) => {
                const date = new Date();
                date.setDate(date.getDate() + index);
                return (
                  <button
                    key={index}
                    className={`calendar__date-btn ${
                      selectedDate.toDateString() === date.toDateString() ? 'active' : ''
                    }`}
                    onClick={() => handleDateSelect(date)}
                  >
                    <span className="day">{date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                    <span className="date">{date.getDate()}</span>
                  </button>
                );
              })}
            </div>

            <div className="calendar__slots">
              {availableSlots.length > 0 ? (
                availableSlots.map((slot, index) => (
                  <button
                    key={index}
                    className="calendar__slot-btn"
                  >
                    {slot.start.toLocaleTimeString('en-US', { 
                      hour: 'numeric', 
                      minute: '2-digit',
                      hour12: true 
                    })}
                  </button>
                ))
              ) : (
                <p className="calendar__no-slots">No available slots for this date</p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Calendar; 