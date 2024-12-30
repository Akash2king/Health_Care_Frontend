import React from 'react';
import { Heart, Thermometer, Activity, Clock } from 'lucide-react';
import { css } from '@emotion/react';

// Define the Emotion CSS styles for the SVG
const mySvgStyle = css`
  fill: blue;
  width: 50px;
  height: 50px;
  display: inline-block;
  white-space: nowrap;
  animation: marquee 10s linear infinite;
  
  @keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const MySvgComponent = () => (
  <svg
    className={mySvgStyle}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="200"
    zoomAndPan="magnify"
    viewBox="0 0 150 60"
    height="80"
    preserveAspectRatio="xMidYMid meet"
    version="1.0"
  >
    <defs><g/></defs>
    <g fill="#52e500" fillOpacity="1">
      <g transform="translate(1.389941, 46.456853)">
        <g><path d="M 0 -35.109375 L 3.90625 -35.109375 L 3.90625 -39.015625 L 27.3125 -39.015625 L 27.3125 -35.109375 L 31.21875 -35.109375 L 31.21875 -3.90625 L 27.3125 -3.90625 L 27.3125 0 L 3.90625 0 L 3.90625 -3.90625 L 0 -3.90625 Z M 15.609375 -15.609375 L 15.609375 -11.703125 L 11.703125 -11.703125 L 11.703125 -7.796875 L 23.40625 -7.796875 L 23.40625 -19.515625 L 19.515625 -19.515625 L 19.515625 -15.609375 Z M 7.796875 -19.515625 L 11.703125 -19.515625 L 11.703125 -23.40625 L 15.609375 -23.40625 L 15.609375 -27.3125 L 19.515625 -27.3125 L 19.515625 -31.21875 L 7.796875 -31.21875 Z M 7.796875 -19.515625 "/></g>
      </g>
    </g>
    <g fill="#52e500" fillOpacity="1">
      <g transform="translate(37.169499, 46.527118)">
        <g><path d="M 0 -24.796875 L 6.203125 -24.796875 L 6.203125 -21.703125 L 9.296875 -21.703125 L 9.296875 -18.59375 L 12.40625 -18.59375 L 12.40625 -21.703125 L 15.5 -21.703125 L 15.5 -24.796875 L 21.703125 -24.796875 L 21.703125 -18.59375 L 18.59375 -18.59375 L 18.59375 -15.5 L 15.5 -15.5 L 15.5 -9.296875 L 18.59375 -9.296875 L 18.59375 -6.203125 L 21.703125 -6.203125 L 21.703125 0 L 15.5 0 L 15.5 -3.09375 L 12.40625 -3.09375 L 12.40625 -6.203125 L 9.296875 -6.203125 L 9.296875 -3.09375 L 6.203125 -3.09375 L 6.203125 0 L 0 0 L 0 -6.203125 L 3.09375 -6.203125 L 3.09375 -9.296875 L 6.203125 -9.296875 L 6.203125 -15.5 L 3.09375 -15.5 L 3.09375 -18.59375 L 0 -18.59375 Z M 0 -24.796875 "/></g>
      </g>
    </g>
    <g fill="#52e500" fillOpacity="1">
      <g transform="translate(61.970737, 46.527118)">
        <g><path d="M 0 -6.203125 L 6.203125 -6.203125 L 6.203125 0 L 0 0 Z M 0 -6.203125 "/></g>
      </g>
    </g>
    <g fill="#52e500" fillOpacity="1">
      <g transform="translate(70.34531, 46.42182)">
        <g><path d="M 0 -39 L 23.40625 -39 L 23.40625 -35.09375 L 27.296875 -35.09375 L 27.296875 -31.203125 L 31.203125 -31.203125 L 31.203125 -7.796875 L 27.296875 -7.796875 L 27.296875 -3.90625 L 23.40625 -3.90625 L 23.40625 0 L 0 0 Z M 7.796875 -7.796875 L 23.40625 -7.796875 L 23.40625 -31.203125 L 7.796875 -31.203125 Z M 7.796875 -7.796875 "/></g>
      </g>
    </g>
    <g fill="#52e500" fillOpacity="1">
      <g transform="translate(103.204683, 45.675)">
        <g><path d="M 3.09375 -24.796875 L 18.59375 -24.796875 L 18.59375 -21.703125 L 21.703125 -21.703125 L 21.703125 0 L 3.09375 0 L 3.09375 -3.09375 L 0 -3.09375 L 0 -12.40625 L 3.09375 -12.40625 L 3.09375 -15.5 L 15.5 -15.5 L 15.5 -18.59375 L 3.09375 -18.59375 Z M 6.203125 -6.203125 L 15.5 -6.203125 L 15.5 -9.296875 L 6.203125 -9.296875 Z M 6.203125 -6.203125 "/></g>
      </g>
    </g>
    <g fill="#52e500" fillOpacity="1">
      <g transform="translate(128.001522, 45.675)">
        <g><path d="M 0 -24.796875 L 6.203125 -24.796875 L 6.203125 -6.203125 L 15.5 -6.203125 L 15.5 -24.796875 L 21.703125 -24.796875 L 21.703125 6.203125 L 18.59375 6.203125 L 18.59375 9.296875 L 3.09375 9.296875 L 3.09375 3.09375 L 15.5 3.09375 L 15.5 0 L 3.09375 0 L 3.09375 -3.09375 L 0 -3.09375 Z M 0 -24.796875 "/></g>
      </g>
    </g>
  </svg>
);

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

interface TeamMemberCardProps {
  name: string;
  position: string;
  image: string;
}

const TeamMemberCard = ({ name, position, image }: TeamMemberCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      {/* <img className="w-32 h-32 rounded-full mx-auto mb-4" src={image} alt={name} style={{ transform: 'scaleX(-1)'}}/> */}
      <img 
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" 
        src={image} 
        alt={name} 
        style={{ transform: 'scaleX(-1)', aspectRatio: '1 / 1' }} 
      />
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
      <p className="text-gray-600">{position}</p>
    </div>
  );
};

const Home = () => {
  const IMGstyles = {
     display: 'flex',
  justifyContent: 'center',
  backgroundColor:"black",
  borderRadius:"10px",
  width:'20%',
  margin:'auto'
  };
  // className {
  //   clip-path: circle(50%);
  // }
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="marquee" style={IMGstyles}>
          <MySvgComponent />
        </div>
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to HealthMonitor
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your personal health monitoring system providing real-time insights and tracking
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <FeatureCard
            icon={<Heart className="h-8 w-8 text-red-500" />}
            title="Heart Rate"
            description="Continuous heart rate monitoring with instant alerts"
          />
          <FeatureCard
            icon={<Thermometer className="h-8 w-8 text-orange-500" />}
            title="Temperature"
            description="Precise body temperature tracking and analysis"
          />
          <FeatureCard
            icon={<Activity className="h-8 w-8 text-blue-500" />}
            title="SpO2 Levels"
            description="Blood oxygen saturation monitoring"
          />
          <FeatureCard
            icon={<Clock className="h-8 w-8 text-purple-500" />}
            title="Reminders"
            description="Set custom reminders for medications and check-ups"
          />
        </div>

        {/* Team Member Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMemberCard
              name="KarthiKeyan M"
              position="Team lead"
              image="assests/karthi.jpeg"
              
            />
            <TeamMemberCard
              name="Logeshwaran V"
              position="Software Developer"
              image="assests/Logesh1.jpeg"
            />
            <TeamMemberCard
              name="sachinn P"
              position="Software Developer"
              image="assests/sachin.jpeg"
            />
            <TeamMemberCard
              name="Thilak P"
               position="UI/UX Designer"
              image="assests/thilak.jpeg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
