import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
const findCurRoute = (path) => {
  const brokenPaths = path.split("/");
  if (brokenPaths.length == 0) return "";
  return brokenPaths[brokenPaths.length - 1];
};
const initialState = {
  overview: false,
  profile: false,
  plans: false,
  downloads: false,
};
export default function ProfileNavigation() {
  const { asPath } = useRouter();
  const [activeStates, setActiveStates] = useState(initialState);
  useEffect(() => {
    const curPath = findCurRoute(asPath);
    if (curPath == "myaccount")
      setActiveStates({
        ...initialState,
        overview: true,
      });
    if (curPath == "profile")
      setActiveStates({
        ...initialState,
        profile: true,
      });
    if (curPath == "plans-payments")
      setActiveStates({
        ...initialState,
        plans: true,
      });
    if (curPath == "downloads")
      setActiveStates({
        ...initialState,
        downloads: true,
      });
  }, []);
  return (
    <div className="profile-navigation">
      <div className="profile-navigation__two">
        <Link href="/myaccount">
          <p className={activeStates.overview && "active"}>Overview</p>
        </Link>
        <Link href="/myaccount/profile">
          <p className={activeStates.profile && "active"}>Profile</p>
        </Link>
      </div>
      <div className="profile-navigation__two">
        <Link href="/myaccount/plans-payments">
          <p className={activeStates.plans && "active"}>Plans and Payments</p>
        </Link>
        <Link href="/myaccount/downloads">
          <p className={activeStates.downloads && "active"}>All Downloads</p>
        </Link>
      </div>
    </div>
  );
}
