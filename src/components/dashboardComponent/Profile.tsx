import React from "react";

const Profile: React.FC = () => {
  return (
    <div className="Profile">
      {/* <h1>This is your Profile, MICHEAL</h1> */}

      <div className="container">
        <div className="user">
          <h2>User Profile</h2>
        </div>
        {/* <div className="photo">
          <div className="circle">
           
          </div>
        </div> */}
        <div className="details">
          <table>
            <tbody>
              <tr>
                <th>Name: </th>
                <td>Wisdom Peters</td>
              </tr>
              <tr>
                <th>Email: </th>
                <td>drmusicpiano@gmail.com</td>
              </tr>
              <tr>
                <th>Gender: </th>
                <td>Male</td>
              </tr>
              <tr>
                <th>Occupation: </th>
                <td>Student</td>
              </tr>
              <tr>
                <th>Home Address: </th>
                <td>Road 1 Apa-Ihe Avenue, Prime Estate, Rumuewhara, PH</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
