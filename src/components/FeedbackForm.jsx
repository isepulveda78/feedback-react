import React from 'react'
import Card from './shared/Card'
import {useState} from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm(){

  const [text, setText] = useState('')
  const [rating, setRating] = useState('')
    const [btnDisabled, setbtnDisabled] = useState(true)
      const [message, setMessage] = useState('')

  const handleTextChange = (e) => {
    if(text === ''){
      setbtnDisabled(true)
      setMessage(null)
    }else if(text !== '' && text.trim().length < 10){
        setbtnDisabled(true)
        setMessage('Text must be at least 10 characters')
    }else{
      setMessage('')
      setbtnDisabled(false)
    }
    setText(e.target.value)
  }

  return (
  <Card>
    <form>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect />
        <div className='input-group'>
            <input onChange={handleTextChange} tpye='text' placeholder='Write a review' value={text} />
            <Button type='submit' isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
  </Card>
  )
}

export default FeedbackForm 