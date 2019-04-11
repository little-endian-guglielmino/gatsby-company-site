import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

export default class Index extends React.Component {
    constructor(props) {
      super(props)
      this.state = { isValidated: false }
    }
  
    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value })
    }
  
   
    render() {
      return (
        <Layout>
          <section className="section">
            <div className="container">
              <div className="content">
                <h1>Work with us</h1>
                <form
                  name="workwithus"
                  method="post"
                  action="https://mailthis.to/LittleEndian"
                  encType="multipart/form-data"
                >
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden>
                    <label>
                      Don’t fill this out:{' '}
                      <input name="bot-field" onChange={this.handleChange} />
                    </label>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'name'}>
                      Your name
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'name'}
                        id={'name'}
                        required={true}
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'email'}>
                      Email
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type="email"
                        name="_replyto"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'message'}>
                      Message
                    </label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        name="message" placeholder="Enter your message here"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <button className="button is-link" type="submit" value="Send">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </Layout>
      )
    }
  }
  