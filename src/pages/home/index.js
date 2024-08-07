import React from 'react';
import './data.css';

export default function Home() {
    return (
        <div className="container-data">
            <h1 className="explore">Explore the World of AI Agents</h1>
            <p className="list">Curated list of 100+ AI Agents and Frameworks</p>

            <input placeholder='Search for AI Agent here...' className="input mb-5" />

            <div className="filter-container">
                <div className="filter-section">
                    <h3>Refine Search</h3>
                    <div className="categories">
                        <h4>Categories</h4>
                        <input type="text" placeholder="Search categories" className="filter-search" />
                        <div className="checkbox-group">
                            <label><input type="checkbox" /> Personal Assistant (8)</label>
                            <label><input type="checkbox" /> Coding (22)</label>
                            <label><input type="checkbox" /> Digital Workers (2)</label>
                            <label><input type="checkbox" /> Productivity (10)</label>
                            <label><input type="checkbox" /> AI Agents Builder (43)</label>
                            <label><input type="checkbox" /> Research (2)</label>
                            <label><input type="checkbox" /> Content Creation (3)</label>
                        </div>
                    </div>
                    <div className="industries">
                        <h4>Industries</h4>
                        <input type="text" placeholder="Search industries" className="filter-search" />
                        <div className="checkbox-group">
                            <label><input type="checkbox" /> Technology (93)</label>
                            <label><input type="checkbox" /> Healthcare (1)</label>
                        </div>
                    </div>
                </div>

                <div className="agents-section">
                    <div className="agents-header">
                        <div className="view-switch">
                            <button className="view-button active">Grid</button>
                            <button className="view-button">List</button>
                        </div>
                        <div className="sort-dropdown">
                            <select className="sort-select">
                                <option>Newest</option>
                                <option>Oldest</option>
                                <option>Popular</option>
                            </select>
                        </div>
                    </div>

                    <div className="agents-list">
                        <div className="agent-card">
                            <img src="path-to-image" alt="Phonely AI" className="agent-image" />
                            <div className="agent-info">
                                <h3>Phonely AI</h3>
                                <p>Automated AI receptionist for businesses.</p>
                                <div className="tags">
                                    <span className="tag freemium">Freemium</span>
                                    <span className="tag category">Customer Service</span>
                                    <span className="tag likes">2</span>
                                </div>
                            </div>
                        </div>
                        <div className="agent-card">
                            <img src="path-to-image" alt="qode" className="agent-image" />
                            <div className="agent-info">
                                <h3>qode</h3>
                                <p>qode automatically finds the best candidates, schedules interviews, and writes interview notes.</p>
                                <div className="tags">
                                    <span className="tag free">Free</span>
                                    <span className="tag category">Workflow</span>
                                    <span className="tag likes">3</span>
                                </div>
                            </div>
                        </div>
                        <div className="agent-card">
                            <img src="path-to-image" alt="KushoAI" className="agent-image" />
                            <div className="agent-info">
                                <h3>KushoAI</h3>
                                <p>Get 100+ ready-to-run functional tests for your APIs in minutes.</p>
                                <div className="tags">
                                    <span className="tag free">Free</span>
                                    <span className="tag category">Coding</span>
                                    <span className="tag likes">6</span>
                                </div>
                            </div>
                        </div>
                        {/* Add more agent cards as necessary */}
                    </div>
                </div>
            </div>
        </div>
    );
}
