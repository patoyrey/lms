import React from "react"
import Button from '@mui/material/Button'

const SignIn: React.FC = () => {
    return (
        <div>
            <h1 className="has-text-primary">
                this is signin page
            </h1>
            <Button  color="success" variant="contained">Hello world</Button>
        </div>
    )
}

export default SignIn