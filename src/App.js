import './App.css'
import React, {useState} from 'react'

const App = () => {
  const [passwords, setPasswords] = useState([])

  const handleAddPassword = e => {
    e.preventDefault()
    const website = e.target.website.value
    const username = e.target.username.value
    const password = e.target.password.value
    const newPassword = {website, username, password}
    setPasswords([...passwords, newPassword])
    e.target.website.value = ''
    e.target.username.value = ''
    e.target.password.value = ''
  }

  const handleDeletePassword = index => {
    const newPasswords = [...passwords]
    newPasswords.splice(index, 1)
    setPasswords(newPasswords)
  }

  return (
    <div className="container">
      <h1>Password Manager</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        alt="app logo"
      />

      <div>
        <h1>Add New Password</h1>
        <form onSubmit={handleAddPassword}>
          <label htmlFor="website">Website:</label>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
            alt="website"
          />
          <input
            type="text"
            name="website"
            placeholder="Enter website"
            required
          />
          <label htmlFor="username">Username:</label>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
            alt="username"
          />
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            required
          />
          <label htmlFor="password">Password:</label>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
            alt="password"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            required
          />
          <button type="submit" onClick="handleAddPassword">
            Add
          </button>
        </form>
        {passwords.map((password, index) => (
          <div key={index}>
            <p>
              <strong>Website: </strong>
              {password.website}
            </p>
            <p>
              <strong>Username: </strong>
              {password.username}
            </p>
            <p>
              <strong>Password: </strong>
              {password.password}
            </p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
            />
            <button onClick={() => handleDeletePassword(index)}>Delete</button>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              alt="delete"
            />
          </div>
        ))}
      </div>
      <div>
        <h1>Your Passwords</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
          alt="search"
        />
        <input type="search" placeholder="search" required></input>
        <br></br>

        <label>Shows Passwords</label>

        <img
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          alt="no passwords"
        />
        <p>No Passwords</p>
      </div>
    </div>
  )
}

export default App
