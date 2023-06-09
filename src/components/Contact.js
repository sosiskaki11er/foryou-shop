import React from 'react'
import Captcha from '../assets/images/Captcha.png'
import LinkIcon from '../assets/icons/link.svg'
function Contact() {
  return (
    <>
    <div className='wrapper' id='contact'>
        <h2>Футболĸа с твоим принтом!</h2>

        <h4>Заполните форму и наши специалисты свяжутся с вами в телеграмм</h4>
        <form>
            <div className='container'>
                <div className='contact-form'>
                        <input type='text' placeholder='Имя или Username в Телеграмм*'/>

                        <input type='tel' placeholder='Телефон*'/>

                        <input type='file' hidden id='attach'/>

                        <label htmlFor='attach'><img src={LinkIcon} alt='link icon'/><span>Прикрепить файл</span></label>

                        <div className='container'>
                            <button type='submit' className='submit'>Отправить</button>
                            
                            <img src={Captcha} alt='captcha'/>
                        </div>
                </div>

                <div className='form-desc'>
                        <textarea className='input-desc' placeholder='Добавь пожелания. Например: хочу футболĸу с приĸрепленным принтом :)'/>
                </div>
            </div>

        </form>
    </div>

    <div className='wrapper' id='contact-mobile'>
        <h2>Футболĸа с твоим принтом!</h2>

        <h4>Заполните форму и наши специалисты свяжутся с вами в телеграмм</h4>
        <form>
            <div className='container'>
                <div className='contact-form'>
                        <input type='text' placeholder='Имя или Username в Телеграмм*'/>

                        <input type='tel' placeholder='Телефон*'/>

                        <input type='file' hidden id='attach'/>

                        <div className='form-desc'>
                          <textarea className='input-desc' placeholder='Добавь пожелания. Например: хочу футболĸу с приĸрепленным принтом :)'/>
                        </div>

                        <label htmlFor='attach'><img src={LinkIcon} alt='link icon'/><span>Прикрепить файл</span></label>

                        <div className='container'>
                            <button type='submit' className='submit'>Отправить</button>
                            
                            <img src={Captcha} alt='captcha'/>
                        </div>
                </div>


            </div>

        </form>
    </div>
    </>
  )
}

export default Contact