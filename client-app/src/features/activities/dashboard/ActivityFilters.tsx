import Calendar from "react-calendar"
import { Header, Menu } from "semantic-ui-react"

export const ActivityFilters = () => {
    return (
        <>
            <Menu vertical size='large' style={{ width: '100%' ,marginTop:25 }}>
                <Header icon='filter' attached color='teal' content='Filters' />
                <Menu.Item content='All Activities' />
                <Menu.Item content="I'm Going" />
                <Menu.Item content="I'm Hosting" />
            </Menu>
            <Header/>

            <Header/>
            <Calendar/>

       
        </>
 
    )
}