import React, { useState, useEffect } from 'react';
import './data.css';
import img1 from '../../Assets/icon1.png';
import img2 from '../../Assets/icon2.png';
import img3 from '../../Assets/icon3.png';
import img4 from '../../Assets/icon7.png';
import img5 from '../../Assets/icon3.png';
import img6 from '../../Assets/icon6.png';
import img7 from '../../Assets/icon2.png';
import img8 from '../../Assets/icon8.png';
import img9 from '../../Assets/icon9.png';
import { useNavigate } from 'react-router-dom';
import PrepLoader from '../../components/prep-loader/loader';

export default function Home() {
    const [agents, setAgents] = useState([]);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the data from the API
        setLoading(true)
        fetch('http://18.143.174.1/api/agent_list')
            .then(response => response.json())
            .then(data => {
                // Map API response to include image paths
                const updatedData = data.agents.map(agent => {
                    // Set the image based on the index or some logic
                    const images = [img1, img6, img2, img8, img5, img6, img7, img8, img9];
                    return {
                        id: agent[0],
                        name: agent[1],
                        description: agent[2],
                        category: agent[3].replace(/"/g, ''),
                        industry: agent[4].replace(/"/g, ''),
                        pricing_model: agent[5].replace(/"/g, ''),
                        api_type: agent[6].replace(/"/g, ''),
                        date: agent[7],
                        url: agent[8],
                        tagline: agent[9].replace(/"/g, ''),
                        duration: agent[10],
                        overview: agent[11],
                        features: agent[12],
                        use_cases: agent[13],
                        author: agent[14],
                        visibility: agent[15],
                        tags: agent[16],
                        preview_image: agent[17].replace(/"/g, ''),
                        demo_video: agent[18].replace(/"/g, ''),
                        img: images[agent[0] % images.length] // Use modulo to cycle through the images
                    };
                });
                setLoading(false)
                setAgents(updatedData);
            })
            .catch(error => setLoading(false)
            );
    }, []);

    return (
        <div className="container-data">
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
                <h1 className="explore">Explore the World of AI Agents</h1>
                <p className="list">Curated list of 100+ AI Agents and Frameworks</p>
                <input placeholder='Search for AI Agent here...' className="input mb-5" style={{ width: '40%' }} />
            </div>
            <div className="filter-container">
                <div className="filter-section">
                    <h3>Refine Search</h3>
                    <div className="categories">
                        <h4>Categories</h4>
                        <input type="text" placeholder="Search categories" className="filter-search" />
                        <div className="checkbox-group" style={{ height: '200px', overflow: 'auto' }}>
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
                        <div className="checkbox-group" style={{ height: '200px', overflow: 'auto' }}>
                            <label><input type="checkbox" /> Technology (93)</label>
                            <label><input type="checkbox" /> Healthcare (1)</label>
                            <label><input type="checkbox" /> Productivity (10)</label>
                            <label><input type="checkbox" /> AI Agents Builder (43)</label>
                            <label><input type="checkbox" /> Research (2)</label>
                            <label><input type="checkbox" /> Content Creation (3)</label>
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
                    {loading ? <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}><PrepLoader /></div> :
                        <div className="agents-list">
                            {
                                agents.map((agent) => (
                                    <div className="agent-card" key={agent.id} style={{ cursor: 'pointer' }} onClick={() => navigate(`/detail?${agent.id}`)}>
                                        <img src={agent.img} alt={agent.name} className="agent-image" />
                                        <div className="agent-info">
                                            <h3>{agent.name}</h3>
                                            <p>{agent.description}</p>
                                            <div className="tags">
                                                <span className="tag free">{agent.pricing_model}</span>
                                                <span className="tag category">{agent.category}</span>
                                                <span className="tag likes">{agent.industry}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>}
                </div>
            </div>
        </div>
    );
}
