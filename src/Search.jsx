import React, {useState} from 'react'
import './App.css'

const Search = () => {
  const [description, setDescription] = useState('');

  const handleGenerateClick = () => {
    e.preventDefault();
    setDescription('');
  }

  return (
    <div className='searchbox'>
      <section class="py-5 text-center container">
            <div class="row py-lg-5">
            <div class="col-lg-12 col-md-12">
                <h1 class="fw-light textbox mb-4 mx-auto">Welcome to WEBthemer!</h1>
                <p class="lead custom-color py-2 mx-auto">Create your perfect website aesthetic with our 
                  custom theme generator. Design, customize, and download fully responsive themes 
                  tailored to your style and brand. Empower your creativity and bring your website 
                  to life with just a few clicks!</p>
                <p>
                <input className='col-md-11 search py-2 px-4 my-4 mx-auto shadow custom-placeholder' 
                  placeholder='Describe your theme'
                  type = 'search'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}>
                </input>
                <a href="/" class="btn col-lg-2 mx-auto button-search" onClick={handleGenerateClick}>Generate</a>
                </p>
            </div>
            </div>
        </section>
    </div>
  )
}

export default Search
