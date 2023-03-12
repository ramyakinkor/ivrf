import React from "react";

export default function Downloads() {
  return (
    <div className="container downloads">
      <table >
        <thead>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Resolution</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Example Video 1</td>
            <td>MP4</td>
            <td>1920 x 1080</td>
            <td>12/11/23 at 3:45</td>
          </tr>
          <tr>
            <td>Example Video 2</td>
            <td>AVI</td>
            <td>1280 x 720</td>
            <td>12/11/23 at 3:45</td>
          </tr>
          <tr>
            <td>Example Image 1</td>
            <td>PNG</td>
            <td>3000 x 2000</td>
            <td>12/11/23 at 3:45</td>
          </tr>
          <tr>
            <td>Example Image 2</td>
            <td>JPEG</td>
            <td>1920 x 1080</td>
            <td>12/11/23 at 3:45</td>
          </tr>
          <tr>
            <td>Example Audio 1</td>
            <td>MP3</td>
            <td>1920 x 1080</td>
            <td>12/11/23 at 3:45</td>
          </tr>
          <tr>
            <td>Example Audio 2</td>
            <td>WAV</td>
            <td>1920 x 1080</td>
            <td>12/11/23 at 3:45</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
