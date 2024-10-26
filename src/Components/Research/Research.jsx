import React from 'react';
import './Research.css';

const Research = () => {
  return (
    <div id='research' className="research-container">
    <h1>Research/Thesis</h1>
    <div className="research-item">
        <h2>Depth-Aware Object Detection and Region Filtering for Autonomous Vehicles</h2>
        <p><strong>Supervisor:</strong> <em>Dr. Md. Khalilur Rhaman, Professor, Department of CSE, BRAC University</em></p>

        <p>In our thesis, we developed a novel pipeline for depth-aware object detection in autonomous vehicles navigating complex road environments with irregular traffic. The process begins with generating a depth map using the MiDaS model, followed by the application of our custom Depth-Aware Region Filter (DARF) to extract regions of interest (ROI) based on depth information. After isolating the ROI, it is masked onto the main image for focused analysis. We then employ YOLO (You Only Look Once) to detect the closest objects within the masked region, enhancing the vehicle's perception and reaction capabilities. This research advances autonomous navigation systems by improving object detection in challenging scenarios.</p>
        <a href="https://github.com/Asif-Ananno" className="research-button">View Paper</a>
    </div>
    
    <div className="research-item">
        <h2>Obstacle Pattern Recognition from a Vehicle's Perspective</h2>
        <p><strong>Supervisor:</strong> <em>Annajiat Alim Rasel, Senior Lecturer, Department of CSE, BRAC University</em></p>
        <p>In this project, we explored obstacle pattern recognition from a vehicle's perspective by leveraging the capabilities of YOLOv8. We evaluated various YOLO versions, including YOLOv3, YOLOv5, YOLOv8, and Tiny YOLOv3, to determine their effectiveness in recognizing obstacles. The models were applied to a custom dataset consisting of two thousand raw data samples, specifically curated for this purpose. We trained and assessed the performance of each model using accuracy and F1 score metrics, providing insights into their capabilities and suitability for real-time obstacle detection in autonomous driving scenarios.</p>
        <a href="https://github.com/Asif-Ananno" className="research-button">View Paper</a>
    </div>
</div>

    
  );
};

export default Research;
