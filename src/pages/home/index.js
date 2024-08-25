import React from 'react';
import './data.css';
import img1 from '../../Assets/icon1.png'
import img2 from '../../Assets/icon2.png'
import img3 from '../../Assets/icon3.png'
import img4 from '../../Assets/icon7.png'
import img5 from '../../Assets/icon3.png'
import img6 from '../../Assets/icon6.png'
 import img7 from '../../Assets/icon2.png'
import img8 from '../../Assets/icon8.png'
import img9 from '../../Assets/icon9.png'

export default function Home() {
    const data = [
        { name: "Phonely AI", desc: "Automated AI receptionnist for business", premium: "Free", category: "Coding", likes: '6', img: img1 },
        { name: "helperbot. ", desc: "Automated AI receptionnist for business", premium: "Premium", category: "Coding", likes: '5', img: img2 },
        { name: "Phonely AI", desc: "Automated AI receptionnist for business", premium: "Free", category: "Coding", likes: '6', img: img1 },
        { name: " Pixella ", desc: "Automated AI receptionnist for business", premium: "Premium", category: "Coding", likes: '5', img: img4 },
        { name: "Alivah", desc: "Automated AI receptionnist for business", premium: "Free", category: "Coding", likes: '6', img: img4 },
        { name: "Dify  in", desc: "Automated AI receptionnist for business", premium: "Premium", category: "Coding", likes: '5', img: img2 },
        { name: "Riki", desc: "Automated AI receptionnist for business", premium: "Free", category: "Coding", likes: '6', img: img3 },
        { name: "Phonely AI", desc: "Automated AI receptionnist for business", premium: "Premium", category: "Coding", likes: '5', img: img8 },
        { name: "Dify", desc: "Automated AI receptionnist for business", premium: "Free", category: "Coding", likes: '6', img: img1 },
        { name: "Phonely AI", desc: "Automated AI receptionnist for business", premium: "Premium", category: "Coding", likes: '5', img: img3 },
        { name: "Twitter Personality Agent", desc: "Automated AI receptionnist for business", premium: "Free", category: "Coding", likes: '6', img: img9 },
        { name: "Phonely AI", desc: "Automated AI receptionnist for business", premium: "Premium", category: "Coding", likes: '5', img: img1 },
        { name: "Devyan", desc: "Automated AI receptionnist for business", premium: "Free", category: "Coding", likes: '6', img: img7},
        { name: "Dagent", desc: "Automated AI receptionnist for business", premium: "Premium", category: "Coding", likes: '5', img: img2 },
        { name: "Phonely AI", desc: "Automated AI receptionnist for business", premium: "Free", category: "Coding", likes: '6', img: img6 },
        { name: "HAystack AI", desc: "Automated AI receptionnist for business", premium: "Premium", category: "Coding", likes: '5', img: img2 }
    ]
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

                    <div className="agents-list">
                        {
                            data.map((item) => {
                                return (
                                    <div className="agent-card">
                                        <img src={item?.img} alt="KushoAI" className="agent-image" />
                                        <div className="agent-info">
                                            <h3>{item?.name}</h3>
                                            <p>{item?.desc}</p>
                                            <div className="tags">
                                                <span className="tag free">{item?.premium}</span>
                                                <span className="tag category">{item?.category}</span>
                                                <span className="tag likes">{item?.likes}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
