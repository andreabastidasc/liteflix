import React, { useState, useRef, useEffect } from 'react'
import styles from './Form.module.scss'
import Icon from '../icons'
import CustomProgressBar from '../ProgressBar'
import useMobileScreenSize from '@/hooks/useMobileScreenSize'
import Logo from '../Logo'

const CustomForm = props => {
  const { setShowModal, setMovies } = props
  const isMobile = useMobileScreenSize()
  const inputRef = useRef(null)
  const [dragActive, setDragActive] = useState(false)
  const [image, setImage] = useState()
  const [showBar, setShowBar] = useState(false)
  const [percentage, setPercentage] = useState(0)
  const [running, setRunning] = useState(true)
  const [name, setName] = useState()
  const [success, setSuccess] = useState(false)

  // PROGRESS BAR

  useEffect(() => {
    if (running) {
      const intervalId = setInterval(() => {
        if (percentage < 100) {
          setPercentage(percentage + 10)
        } else {
          clearInterval(intervalId)
        }
      }, 800)
      return () => clearInterval(intervalId)
    }
  }, [percentage, running])

  const handleStop = () => {
    setRunning(false)
    setPercentage(100)
  }

  const handleReset = () => {
    setImage(undefined)
    setPercentage(0)
    setShowBar(false)
  }

  // DRAG IMAGE

  const handleDrag = function (e) {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = function (e) {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setImage(e.dataTransfer.files[0])
      setShowBar(true)
      setRunning(true)
    }
  }

  const handleChange = function (e) {
    e.preventDefault()

    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0])
      setShowBar(true)
      setRunning(true)
    }
  }

  const onButtonClick = () => {
    inputRef.current.click()
  }

  // SUBMIT

  const handleSubmit = (e) => {
    e.preventDefault()
    const reader = new FileReader()
    reader.readAsDataURL(image)
    reader.onload = function () {
      const imageData = reader.result
      const item = { image: imageData, name }

      setMovies(prevData => {
        if (prevData.length === 4) {
          prevData.shift()
        }
        localStorage.setItem('movies', JSON.stringify([...prevData, item]))
        return [...prevData, item]
      })
    }

    setSuccess(true)
  }

  if (success) {
    return (
      <div className={styles.success}>
        {!isMobile
          ? (
          <Logo />
            )
          : null}
        <p className={styles['success-title']}>¡Felicitaciones!</p>
        <p className={styles['success-text']}>{name} fue correctamente subida.</p>
        <button onClick={() => setShowModal(false)} className={styles['success-button']}>IR A HOME</button>
      </div>
    )
  }

  return (
    <form onDragEnter={handleDrag} onSubmit={(e) => handleSubmit(e)} className={styles.form}>
        <h4 className={styles['form-title']}>AGREGAR PELÍCULA</h4>
        {showBar
          ? (
            <CustomProgressBar
                reset={handleReset}
                running={running}
                text={running ? `CARGANDO ${percentage}%` : '¡ERROR! NO SE PUDO CARGAR LA PELÍCULA'}
                bgcolor={!running ? '#FF0000' : '#64EEBC'}
                action={handleStop}
                completed={percentage}
                textCompleted={`${percentage}% CARGADO`}
            />
            )
          : (
            <div>
                <input ref={inputRef} type="file" id="input-file-upload" onChange={handleChange} className={styles['form-upload-input']} />
                <label id="label-file-upload" className={styles['form-upload-label']} htmlFor="input-file-upload">
                    <div className={styles['form-upload-placeholder']}>
                        <button type="button" onClick={onButtonClick} className={styles['form-upload-button']}>
                            <Icon name="clip" />
                            AGREGÁ UN ARCHIVO
                        </button>
                        {!isMobile
                          ? (
                          <p>O ARRASTRALO Y SOLTALO AQUÍ</p>
                            )
                          : null}

                    </div>
                </label>
                {dragActive && <div id="drag-file-element" className={styles['form-drag']} onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
            </div>
            )}
        <input type="text" id="name" className={styles['form-input']} placeholder="TÍTULO" onChange={(e) => setName(e.target.value)} />
        <input type="submit" value="SUBIR PELÍCULA" className={styles['form-submit']} disabled={!(name && image)} />
    </form>
  )
}

export default CustomForm
