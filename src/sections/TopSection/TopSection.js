import React from 'react';
import CircleButton from '../../components/CircleButton/CircleButton';
import './TopSection.scss';

import { CommonConfig, Icons } from '../../config';

class TopSection extends React.Component {

    componentDidMount() {
        if (this.pathElement) {
            const signatureLength = this.pathElement.getTotalLength();
            this.pathElement.setAttribute('stroke-dasharray', signatureLength);
            this.pathElement.setAttribute('stroke-dashoffset', signatureLength);
            
            const viewBoxCoords = CommonConfig.signature?.viewBox.split(' ').map(val => parseInt(val));
            this.pathElement.setAttribute('stroke-width', Math.max(...viewBoxCoords) / 100);
        }
    }

    render() {
        return (
            <div className="top-section">
                <div className="intro">
                    <h1>{CommonConfig.name}</h1>
                    <p>{CommonConfig.tagline}</p>
                </div>
                <div className="signature">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke='currentColor'  strokeWidth={'14px'} viewBox={CommonConfig.signature?.viewBox}
                    preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,141.000000) scale(0.100000,-0.100000)"  >
                        <path ref={pathElement => {
                            this.pathElement = pathElement;
                        }} id="signature-path" stroke="currentColor" strokeWidth={'14px'} fill="none"
                            d={CommonConfig.signature?.signaturePathD} />
                    </g></svg>
                </div>
                <div className="social">
                    {CommonConfig.social.map((socialDetails, index) => {
                        return (
                            <CircleButton key={'top-section-social-' + index} tooltip={socialDetails.name} tooltipPlacement="top"
                                link={socialDetails.link} target="_blank">
                                {/* If the social platform icon is given then use that else pick from default icons */}
                                {socialDetails.icon
                                    ? socialDetails.icon : Icons[socialDetails.name.toLowerCase()]}
                            </CircleButton>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default TopSection;