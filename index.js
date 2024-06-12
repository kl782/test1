/**
 * v0 by Vercel.
 * @see https://v0.dev/t/7yay9V3iRf7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from 'react';
import * as tmImage from '@teachablemachine/image';
import axios from 'axios';

// URL to your Teachable Machine model
const URL = './model.json';

// Loading and setting up the model
async function loadModel() {
  const modelURL = `${URL}/model.json`;
  const metadataURL = `${URL}/metadata.json`;

  const model = await tmImage.load(modelURL, metadataURL);
  const maxPredictions = model.getTotalClasses();
  const classNames = model.getClassLabels(); // Retrieve class names from metadata

  return { model, maxPredictions, classNames };
}

async function setupWebcam() {
  const flip = true; // whether to flip the webcam
  const webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
  await webcam.setup(); // request access to the webcam
  await webcam.play();
  window.requestAnimationFrame(loop(webcam, null, null, null)); // start the webcam frame loop with temporary null values
  return webcam;
}

async function predict(webcam, model, maxPredictions) {
  const prediction = await model.predict(webcam.canvas);
  return prediction;
}

async function handlePredictions(prediction, setAttendance) {
  const THRESHOLD = 0.9; // Example threshold

  // Empty list to store current attendance
  let attendanceList = [];

  for (let i = 0; i < prediction.length; i++) {
    if (prediction[i].probability > THRESHOLD) {
      attendanceList.push({
        className: prediction[i].className,
        probability: prediction[i].probability
      });

      // Log attendance via webhook if category detected
      await logAttendance(prediction[i].className);
    }
  }

  // Update attendance state
  setAttendance(attendanceList);
}

async function logAttendance(category) {
  const webhookURL = 'https://example.com/webhook'; // Replace with your actual webhook URL

  const payload = {
    timestamp: new Date().toISOString(),
    name: category,
  };

  await axios.post(webhookURL, payload, {
    headers: {
      'name': category,
    }
  });
}

function loop(webcam, model, maxPredictions, setAttendance) {
  return async function innerLoop() {
    webcam.update();  // update the webcam frame
    const prediction = await predict(webcam, model, maxPredictions);
    await handlePredictions(prediction, setAttendance);

    window.requestAnimationFrame(innerLoop);  // loop
  };
}

const AttendanceComponent = () => {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    (async () => {
      const { model, maxPredictions } = await loadModel();
      const webcam = await setupWebcam();

      // Start the prediction loop with the actual values
      window.requestAnimationFrame(loop(webcam, model, maxPredictions, setAttendance));
    })();
  }, []);

  return (
    <div>
      <div id="webcam-container" style={{ width: 200, height: 200 }}>
        <div id="label-container"></div>
      </div>
      <div>
        <h2>Current Attendance</h2>
        <ul>
          {attendance.map((att, index) => (
            <li key={index}>{att.className} - {(att.probability * 100).toFixed(2)}%</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold">Welcome to SuperAcme</h1>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-300">
            <PowerIcon className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-300">
            <UserIcon className="h-5 w-5" />
          </Button>
        </div>
      </header>
      <main className="flex-1 bg-gray-100 dark:bg-gray-800 p-6 md:p-10 grid gap-6">
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow overflow-hidden">
          <div className="aspect-video relative">
            <AttendanceComponent />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-white text-2xl font-bold">Facial Recognition</div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow p-6 md:p-8 grid gap-4">
          {/* Attendance details content here */}
        </div>
      </main>
    </div>
  );
}

// Icon Components
function DotIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12.1" cy="12.1" r="1" />
    </svg>
  );
}

function PowerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}