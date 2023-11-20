import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div>
      <div className={`alert alert-${props.alert.type} d-flex align-items-center`} role="alert">
        <strong>{props.alert.message}</strong>
    </div>
    </div>

  )
}
