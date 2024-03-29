import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Header, Icon, Segment } from 'semantic-ui-react'

export default function NotFound() {
    return (
        
        <Segment>
            <Header>
                <Icon name ='search'/>
                Opps - we've looked everywhere and could not find this.
            </Header>
            <Segment.Inline>
                <Button as = {Link} to='/Activities' primary>
                    return to activities page
                </Button>
            </Segment.Inline>    
        </Segment>
    )
}


