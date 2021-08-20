import { http } from './config'

export default {
    sendMail: (props) => {
        return http.post('add', props)
    }
}