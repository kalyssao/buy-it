import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Header, Image, Grid, Button } from 'semantic-ui-react'

import ErrorModal from '../components/ErrorModal'

export default function Result() {
    const location = useLocation()
    const [ error, setError ] = useState()
    const [ verdict, setVerdict ] = useState()

    useEffect(() => {
        console.log(location)
        setVerdict(location.the_decision)
        if(location.message){
            setError(location.message)
        }
    }, [location])
    return (
        <div>
        <Grid text-align="center" style={{ height: '100vh', margin: '0.5em' }}>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row style={{ height: '90%'}}>
                    <Grid.Column width={9}>
                        <Image src={location.prod_img}/>
                    </Grid.Column>
                    <Grid.Column width={7} textAlign="left">
                        { error
                        ? <ErrorModal errorMessage={error} />
                        :   <>
                            <Header size="huge">{location.prod_title}</Header>
                            { verdict === true
                            ? <Header color="green" size="large">
                                    Buy it.
                                </Header>

                            : <Header color="red" size="large">
                                    Don't.
                                </Header>
                            
                            }{ location.prod_rating
                                ? 
                                <Header size="medium">
                                    This product has an average rating of {location.prod_rating}!
                                </Header>
                                : <></>
                            }
                            
                            </>
                        }

                        <Link to="/">
                            <Button color="teal">Back Home</Button>
                        </Link>

                    </Grid.Column>
                </Grid.Row>
                
                
                
            </Grid>
        </Grid>
        </div>
    )
}