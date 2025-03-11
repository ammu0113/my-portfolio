import React, { useState } from "react";
import { FiMessageSquare, FiX } from 'react-icons/fi';
import { usePortfolio } from '../../context/PortfolioContext';
import './ChatWidget.scss';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([{ role: "bot", text: "Hi! Ask me anything about Amulya's portfolio, skills, or projects." }]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const { personalInfo, skills, experience, education, projects, summary } = usePortfolio();

    // Enhanced knowledge base with structured responses
    const techQuestions = ["what are the technologies", "which technologies", "tech stack", "technology stack"];
    const technologiesUsed = `
        Amulya specializes in:
        - Languages: ${skills.languages.join(", ")}
        - Cloud: ${skills.cloudTechnologies.join(", ")}
        - Web: ${skills.webTechnologies.join(", ")}
        - React Ecosystem: ${skills.reactEcosystem.join(", ")}
        - Databases: ${skills.databaseEnvironments.join(", ")}
        - Testing: ${skills.automationTesting.join(", ")}
        - DevOps: ${skills.versionControlTools.join(", ")}
    `;

    const knowledgeBase = {
        "who is amulya": `Amulya Bandla is a ${personalInfo.firstname} ${personalInfo.lastname}, a Senior Full Stack Developer with ${summary[0]}.`,
        "current job": `Amulya is currently working as a ${experience[0].position} at ${experience[0].company}, ${experience[0].location}.`,
        "previous work": `Previously, Amulya worked at ${experience.map(exp => `${exp.company} (${exp.position})`).join(", ")}.`,
        "education": `Amulya holds a ${education[0].degree} from ${education[0].institution}, completed in ${education[0].period}.`,
        "github": `Yes! Here's the GitHub link: https://github.com/ammu0113`,
        "contact": `You can contact Amulya at ${personalInfo.email}.`,
        "location": `Amulya is located in ${personalInfo.location}.`,
        "experience": `${summary.slice(0, 3).join(" ")}`,
        "skills": `Amulya's key skills include ${skills.languages.join(", ")}, and expertise in ${skills.cloudTechnologies.slice(0, 5).join(", ")}.`,
    };

    // Add project-specific responses
    projects.forEach((project) => {
        knowledgeBase[project.title.toLowerCase()] = 
            `${project.description} Technologies used: ${project.technologies.join(", ")}. ${
                project.liveLink ? `Live demo: ${project.liveLink}` : ''
            } ${project.sourceCode ? `Source code: ${project.sourceCode}` : ''}`;
    });

    const getResponse = (question) => {
        question = question.toLowerCase();
        
        // Check for technology-related queries first
        if (techQuestions.some(q => question.includes(q))) {
            return technologiesUsed;
        }

        // Check for matches in knowledge base
        for (const [key, value] of Object.entries(knowledgeBase)) {
            if (question.includes(key.toLowerCase())) {
                return value;
            }
        }

        // Default response if no match found
        return "I'm not sure about that. Try asking about Amulya's skills, experience, projects, education, or contact information!";
    };

    const sendMessage = async () => {
        if (!input.trim()) return;
        
        const newMessages = [...messages, { role: "user", text: input }];
        setMessages(newMessages);
        setLoading(true);

        // Get response from knowledge base with a small delay for natural feel
        setTimeout(() => {
            const response = getResponse(input);
            setMessages([...newMessages, { 
                role: "bot", 
                text: response
            }]);
            setLoading(false);
        }, 500);

        setInput("");
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <>
            <button 
                className={`chat-widget-toggle ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <FiX /> : <FiMessageSquare />}
            </button>

            {isOpen && (
                <div className="chat-widget">
                    <div className="chat-widget__header">
                        <h3>Chat with Portfolio Assistant</h3>
                    </div>
                    <div className="chat-widget__messages">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`message ${msg.role}`}>
                                <p>{msg.text}</p>
                            </div>
                        ))}
                        {loading && (
                            <div className="message bot">
                                <div className="typing-indicator">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="chat-widget__input">
                        <input 
                            type="text" 
                            value={input} 
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Ask about skills, projects, experience..."
                            disabled={loading}
                        />
                        <button 
                            onClick={sendMessage} 
                            disabled={loading || !input.trim()}
                        >
                            {loading ? "..." : "Send"}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatWidget;