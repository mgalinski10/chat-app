import React from 'react';

const StatusPage = () => {
  return (
    <form>
      <fieldset className="flex items-center space-x-6">
        <legend className="text-lg font-semibold mb-5">Set status</legend>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name="status"
            value="online"
            className="form-radio accent-blue-800"
            defaultChecked
          />
          <span>Online</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name="status"
            value="offline"
            className="form-radio accent-blue-800"
          />
          <span>Offline</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name="status"
            value="busy"
            className="form-radio accent-blue-800"
          />
          <span>Busy</span>
        </label>
      </fieldset>
    </form>
  );
};

export default StatusPage;
