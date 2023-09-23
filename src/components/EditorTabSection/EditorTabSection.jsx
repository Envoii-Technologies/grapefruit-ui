import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './EditorTabSection.scss'

export const EditorTabSection = ({ className, tabItems, ...props }) =>
{
	const [activeTab, setActiveTab] = useState(0);

	return (
		<div className={`EditorTabSection ${ className !== undefined ? className : "" }`}>
			<div className="EditorTabSectionMenu">
				{
					tabItems.map((item, i) => (
						<div 
							className={`EditorTabSectionMenuItem ${activeTab === i ? 'active' : ''}`}
							key={i} 
							onClick={() => setActiveTab(i)}
						>
							{item.title}
						</div>
					))
				}
			</div>
			<div className="EditorTabSectionContent">
				{
					tabItems[activeTab].content
				}
			</div>
		</div>
	)
}

EditorTabSection.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
	tabItems: PropTypes.array
};

EditorTabSection.defaultProps =
{
	className: undefined,
	tabItems: [
		{
			title: "Schritte",
			content: <p>First Content</p>
		},
		{
			title: "Informationen",
			content:  <p>Second Content</p>
		},
		{
			title: "Medien",
			content:  <p>Third Content</p>
		}
	]
};
