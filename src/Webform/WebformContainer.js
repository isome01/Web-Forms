import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {Map, fromJS} from 'immutable'
import {useForm} from '@clearc2/c2-form'

import {styles} from './webform.styles'

const Webform = ({id}) => {
  const [loading, setLoading] = React.useState(false)
  const {currentValues, initialValues, setValue, setInitialValues} = useForm()

  /* On component mounting... */
  React.useEffect(() => {
    /* Make some API callback happen to retrieve data */
    setInitialValues(fromJS({password: '', email: '', rememberMe: false}))
    console.log(initialValues)
  }, [setInitialValues])

  const onSubmit = React.useCallback(e => {
    e.preventDefault()
    console.log(currentValues)
    /* Again, make some API callback to "post" some data. */
  }, [currentValues])

  return (
    <div className='container'>
      <div className='row'>
        <form
          className='col-sm-4 col-sm-offset-4'
          style={styles['test_form']}>
          <div className='form-group'>
            <label htmlFor='email'>Email address:</label>
            <input
              id='email'
              value={currentValues.get('email', '')}
              onChange={e => {setValue('email', e.target.value)}}
              type='email'
              className='form-control'
            />
          </div>
          <div className="form-group">
            <label htmlFor='pwd'>Password:</label>
            <input
              value={currentValues.get('password', '')}
              onChange={e => {setValue('password', e.target.value)}}
              type='password'
              className='form-control'
              id='pwd'
            />
          </div>
          <div className="checkbox">
            <label>
              <input
                checked={currentValues.get('rememberMe', false)}
                onChange={e => {setValue('rememberMe', e.target.checked)}}
                type='checkbox'
              />
              Remember me
            </label>
          </div>
          <button
            disabled={!currentValues.equals(initialValues)}
            className='btn btn-default'
            onClick={onSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

Webform.propTypes = {
  id: PropTypes.string
}

export default Webform
