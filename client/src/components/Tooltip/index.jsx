import './styles.css'

const Tooltip = ({ isShow = false, children, styles = {} }) => {
  console.log(typeof styles.bottom !== 'undefined')

  if (!isShow) return null
  return (
    <div className="tooltip__wrapper" style={{ ...styles }}>
      <div
        className={`tooltip__container${typeof styles.bottom !== 'undefined' ? '--bottom' : ''}`}
      >
        <div className="tooltip__element">{children}</div>
        <span className="tooltip__shape--bottom" />
      </div>
    </div>
  )
}

export default Tooltip
