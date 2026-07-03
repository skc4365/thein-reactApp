import { Outlet } from "react-router-dom";

function ABOUT() {
  return (
    <div>
      <h1>나의 소개, 경력, 강점을 표현</h1>

      <Outlet />
    </div>
  );
}

export default ABOUT;
