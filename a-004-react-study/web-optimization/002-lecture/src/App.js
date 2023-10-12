import React, { useState, Suspense, lazy, useEffect } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import InfoTable from './components/InfoTable'
import SurveyChart from './components/SurveyChart'
import Footer from './components/Footer'
// import ImageModal from './components/ImageModal'

// const LazyImageModal = lazy(()=> import('./components/ImageModal'))

function LazyWithPreload(importFunction) {
    const Component = React.lazy(importFunction)
    Component.preload = importFunction
    return Component;
}

const LazyImageModal = LazyWithPreload(()=> import('./components/ImageModal'))

function App() {
    const [showModal, setShowModal] = useState(false)

    // const handleMouseEnter = () => {
    //     // 마우스 호버시 import
    //     const Component =  import('./components/ImageModal');
    // }

    useEffect(() => {
        // 마운트시 로딩
        // const Component =  import('./components/ImageModal');
        LazyImageModal.preload()
    }, [])
    

    return (
        <div className="App">
            <Header />
            <InfoTable />
            {/* <ButtonModal onClick={() => { setShowModal(true) }} onMouseEnter={handleMouseEnter}>올림픽 사진 보기</ButtonModal> */}
            <ButtonModal onClick={() => { setShowModal(true) }} >올림픽 사진 보기</ButtonModal>
            <SurveyChart />
            <Footer />
            {/* {showModal ? <ImageModal closeModal={() => { setShowModal(false) }} /> : null} */}
            <Suspense fallback={null}>
                {showModal ? <LazyImageModal closeModal={() => { setShowModal(false) }} />: null}
            </Suspense> 
        </div>
    )
}

const ButtonModal = styled.button`
    border-radius: 30px;
    border: 1px solid #999;
    padding: 12px 30px;
    background: none;
    font-size: 1.1em;
    color: #555;
    outline: none;
    cursor: pointer;
`

export default App
