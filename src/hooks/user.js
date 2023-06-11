import { useEffect, useState } from "react"
import { useRouter } from "next/router";
import Swal from 'sweetalert2';

export function useUser() {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [userDetails, setUserDetails] = useState({});
  const [imageSubscriptionModel, setImageSubscriptionModel] = useState([]);
  const [videoSubscriptionModel, setVideoSubscriptionModel] = useState([]);
  async function handleRegister(name, phone, email, password, reset) {
    try {
      let res = await fetch('/api/User', {
        method: 'POST',
        body: JSON.stringify({
          name, 
          phone, 
          email, 
          password 
        }),
        headers: {
          "Content-Type": "application/json",
        }
      });
      res = await res.json();
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Register Successfully',
     })
     reset()
      console.log(`user registered success`);
    } catch(err) {
      const errorMessage = err.message;
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: errorMessage,
      })
      console.log(`error while creating user ${err}`);
    }
    
  }

  async function loginUser(email, password, reset) {
    try {
      let res = await fetch('/api/User/login', {
        method: 'POST',
        body: JSON.stringify({
          email,
          password
        }),
        headers: {
          "Content-Type": "application/json",
        }
      })
      res = await res.json()
      reset();
      setUser({
        displayName: res.user.name,
        email: res.user.email
      })
      router.push('/')
    } catch(err) {
      console.log(`error while login ${err}`);
      const errorMessage = err.message;
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: errorMessage,
      })
    }
  }

  async function updateUser(name, phone, email, reset) {
    try {
      let res = await fetch('/api/User/', {
        method: 'PUT',
        body: JSON.stringify({
          name,
          email,
          phone
        }),
        headers: {
          "Content-Type": "application/json",
        }
      })
      res = await res.json()
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'update Successfully',
      })
      reset();
    } catch(err) {
      const errorMessage = err.message;
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: errorMessage,
      })
      console.log(`error while updating ${err}`);
    }
  }

  async function logout() {
    try {
      let res = await fetch('/api/User/logout', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        }
      })
      console.log(`user logged out`);
      Swal.fire({
        icon: 'success',
        title: 'Logout Successfully',
     })
      setUser({});
      router.push('/');
    } catch (err) {
      const errorMessage = err.message;
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: errorMessage,
     })
      console.log(`error logging out`)
    }
    
  }

  async function handleGoogleSignIn() {
      console.log('google signIn under development');
  }

  async function passwordResetEmail() {
    console.log('password reset under development');
  }

  async function getUserDetails() {
    let res = await fetch('/api/User/');
    res = await res.json();
    setUserDetails(res);
  }

  async function purchaseSubscription(data) {
    try {
      let res = await fetch('/api/Subscription', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: data
      })
      res = await res.json();
      console.log(res);
      window.location.href = res.url
    } catch (err) {
      const errorMessage = err.message;
      console.log(`error logging out`)
    }
  }

  async function getImageSubscriptionModels() {
    let res = await fetch('/api/SubscriptionModel/images');
    res = await res.json();
    console.log(res)
    setImageSubscriptionModel(res);
  }

  async function getVideoSubscriptionModels() {
    let res = await fetch('/api/SubscriptionModel/videos');
    res = await res.json();
    console.log(res);
    setVideoSubscriptionModel(res);
  }

  
  useEffect(() => {
    getUserDetails();
  }, [user]);

  useEffect(() => {
    getSubscriptions()
  }, [])

  function getSubscriptions() {
    getImageSubscriptionModels();
    getVideoSubscriptionModels();
  }


  return {
    user,
    userDetails,
    handleGoogleSignIn,
    handleRegister,
    updateUser,
    loginUser,
    passwordResetEmail,
    purchaseSubscription,
    imageSubscriptionModel,
    videoSubscriptionModel,
    logout
 }
}