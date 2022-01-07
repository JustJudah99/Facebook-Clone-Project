import { useState } from 'react'
import Footer from '../../components/Footer'
import LoginForm from '../../components/LoginForm'
import Modal from '../../components/Modal'
import RegisterForm from '../../components/RegisterForm'
import './styles.css'

const Home = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className="home__wrapper">
      <section className="home__section">
        <LoginForm handleSignUp={() => setShowModal((prev) => !prev)} />
      </section>
      <Modal visible={showModal}>
        <RegisterForm />
      </Modal>
      <Footer />
    </div>
  )
}

export default Home
