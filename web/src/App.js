import React, { useEffect, useState } from 'react';

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {
  const [github_username, setGithubUsername] = useState('')
  const [techs, setTechs] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        setLatitude(latitude)
        setLongitude(longitude)
      },
      (err) => {
        console.log(err)
      },
      {
        timeout: 30000,
      }
    )
  }, [])

  async function handleAddDev(e) {
    e.preventDefault()
    
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input 
            name="github_username" 
            id="github_username" 
            required 
            value={github_username}
            onChange={e => setGithubUsername(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
            name="techs" 
            id="techs" 
            required 
            value={techs}
            onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
              type="number" 
              name="latitude" 
              id="latitude" 
              required 
              value={latitude} 
              onChange={e => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="number" 
              name="longitude" 
              id="longitude" 
              required 
              value={longitude}
              onChange={e => setLongitude(e.target.value)} 
              />
            </div>

          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/15960777?s=460&v=4" alt="Cleyton Rodrigues" />
              <div className="user-info">
                <strong>Cleytoo Rodrigues</strong>
                <span>ReactJs, Python, NodeJs</span>
              </div>
            </header>
            <p>Apaixonado pelo universo da tecnologia</p>
            <a href="https://github.com/CleytonRR">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/15960777?s=460&v=4" alt="Cleyton Rodrigues" />
              <div className="user-info">
                <strong>Cleytoo Rodrigues</strong>
                <span>ReactJs, Python, NodeJs</span>
              </div>
            </header>
            <p>Apaixonado pelo universo da tecnologia</p>
            <a href="https://github.com/CleytonRR">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/15960777?s=460&v=4" alt="Cleyton Rodrigues" />
              <div className="user-info">
                <strong>Cleytoo Rodrigues</strong>
                <span>ReactJs, Python, NodeJs</span>
              </div>
            </header>
            <p>Apaixonado pelo universo da tecnologia</p>
            <a href="https://github.com/CleytonRR">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/15960777?s=460&v=4" alt="Cleyton Rodrigues" />
              <div className="user-info">
                <strong>Cleytoo Rodrigues</strong>
                <span>ReactJs, Python, NodeJs</span>
              </div>
            </header>
            <p>Apaixonado pelo universo da tecnologia</p>
            <a href="https://github.com/CleytonRR">Acessar perfil no GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
