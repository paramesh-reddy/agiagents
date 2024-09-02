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
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const [search, setSearch] = useState('');
    const [accessoryModel, setAccessoryModel] = useState('');
    const [category, setCategory] = useState('');
    const [industry, setIndustry] = useState('');
    const [sort, setSort] = useState('');

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedIndustries, setSelectedIndustries] = useState([]);
    const [categorySearch, setCategorySearch] = useState('');
    const [industrySearch, setIndustrySearch] = useState('');

    const categoriesList = ["Personal Assistant", "Coding", "Digital Workers", "Productivity", "AI Agents Builder", "Research", "Content Creation"];
    const industriesList = ["Technology", "Healthcare", "Productivity", "AI Agents Builder", "Research", "Content Creation"];

    // Handle change functions for the filters
    const handleSearchChange = (e) => setSearch(e.target.value);
    const handleAccessoryModelChange = (e) => setAccessoryModel(e.target.value);
    const handleCategoryChange = (e) => setCategory(e.target.value);
    const handleIndustryChange = (e) => setIndustry(e.target.value);
    const handleSortChange = (e) => setSort(e.target.value);

    const handleCategorySearchChange = (e) => setCategorySearch(e.target.value);
    const handleIndustrySearchChange = (e) => setIndustrySearch(e.target.value);

    const handleCategoryCheckboxChange = (category) => {
        const updatedCategories = selectedCategories.includes(category)
            ? selectedCategories.filter((item) => item !== category)
            : [...selectedCategories, category];
        setSelectedCategories(updatedCategories);
    };

    const handleIndustryCheckboxChange = (industry) => {
        const updatedIndustries = selectedIndustries.includes(industry)
            ? selectedIndustries.filter((item) => item !== industry)
            : [...selectedIndustries, industry];
        setSelectedIndustries(updatedIndustries);
    };

    useEffect(() => {
        setLoading(true);

        const fetchAgents = async () => {
            try {
                const queryParams = [];

                if (search) queryParams.push(`search=${encodeURIComponent(search)}`);
                if (accessoryModel) queryParams.push(`accessory_model=${encodeURIComponent(accessoryModel)}`);
                if (selectedCategories.length) queryParams.push(`category=${encodeURIComponent(selectedCategories.join(','))}`);
                if (selectedIndustries.length) queryParams.push(`industry=${encodeURIComponent(selectedIndustries.join(','))}`);
                if (sort) queryParams.push(`sort=${encodeURIComponent(sort)}`);

                const queryString = queryParams.length ? `?${queryParams.join('&')}` : '';

                const response = await fetch(`http://18.143.174.1/api/agent_list${queryString}`);
                const data = await response.json();

                const images = [img1, img6, img2, img8, img5, img6, img7, img8, img9];
                const updatedData = data.agents.map(agent => ({
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
                    img: images[agent[0] % images.length]
                }));

                setLoading(false);
                setAgents(updatedData);
            } catch (error) {
                setLoading(false);
                console.error('Error fetching agents:', error);
            }
        };

        fetchAgents();
    }, [search, accessoryModel, selectedCategories, selectedIndustries, sort]);

    const filteredCategories = categoriesList.filter(category => 
        category.toLowerCase().includes(categorySearch.toLowerCase())
    );

    const filteredIndustries = industriesList.filter(industry => 
        industry.toLowerCase().includes(industrySearch.toLowerCase())
    );

    return (
        <div className="container-data">
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
                <h1 className="explore">Explore the World of AI Agents</h1>
                <p className="list">Curated list of 100+ AI Agents and Frameworks</p>
                <input
                    placeholder='Search for AI Agent here...'
                    className="input mb-5"
                    style={{ width: '40%' }}
                    value={search}
                    onChange={handleSearchChange}
                />
            </div>
            <div className="filter-container">
                <div className="filter-section">
                    <h3>Refine Search</h3>
                    <div className="categories">
                        <h4>Categories</h4>
                        <input
                            type="text"
                            placeholder="Search categories"
                            className="filter-search"
                            value={categorySearch}
                            onChange={handleCategorySearchChange}
                        />
                        <div className="checkbox-group" style={{ height: '200px', overflow: 'auto' }}>
                            {filteredCategories.map((category, index) => (
                                <label key={index} style={{display:'flex',gap:'4px'}}>
                                    <input
                                        type="checkbox"
                                        checked={selectedCategories.includes(category)}
                                        onChange={() => handleCategoryCheckboxChange(category)}
                                    /> 
                                    {category} ({Math.floor(Math.random() * 50) + 1})
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="industries">
                        <h4>Industries</h4>
                        <input
                            type="text"
                            placeholder="Search industries"
                            className="filter-search"
                            value={industrySearch}
                            onChange={handleIndustrySearchChange}
                        />
                        <div className="checkbox-group" style={{ height: '200px', overflow: 'auto' }}>
                            {filteredIndustries.map((industry, index) => (
                                <label key={index}>
                                    <input
                                        type="checkbox"
                                        checked={selectedIndustries.includes(industry)}
                                        onChange={() => handleIndustryCheckboxChange(industry)}
                                    /> 
                                    {industry} ({Math.floor(Math.random() * 50) + 1})
                                </label>
                            ))}
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
                            <select className="sort-select" value={sort} onChange={handleSortChange}>
                                <option value="newest">Newest</option>
                                <option value="oldest">Oldest</option>
                                <option value="popular">Popular</option>
                            </select>
                        </div>
                    </div>
                    {loading ? (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <PrepLoader />
                        </div>
                    ) : (
                        <div className="agents-list">
                            {agents.map((agent) => (
                                <div className="agent-card" key={agent.id} style={{ cursor: 'pointer' }} onClick={() => navigate(`/detail?${agent.id}`)}>
                                    <img src={agent.img} alt={agent.name} className="agent-image" />
                                    <div className="agent-info">
                                        <h3>{agent.name}</h3>
                                        <p>{agent.description}</p>
                                        <div className="tags">
                                            <span className="tag free">{agent.pricing_model}</span>
                                            <span className="tag paid">{agent.api_type}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
