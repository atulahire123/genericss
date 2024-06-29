import React from 'react'
import { Button, Container,  Table } from 'react-bootstrap'

const Albumlist = () => {
    let Dummylist = [
        {
          date: "JUL16",
          place: "DETROIT, MI",
          address: "DTE ENERGY MUSIC THEATRE",
        },
        {
          date: "JUL19",
          place: "TORONTO,ON",
          address: "BUDWEISER STAGE",
        },
        {
          date: "JUL 22",
          place: "BRISTOW, VA",
          address: "JIGGY LUBE LIVE",
        },
        {
          date: "JUL 29",
          place: "PHOENIX, AZ",
          address: "AK-CHIN PAVILION",
        },
        {
          date: "AUG 2",
          place: "LAS VEGAS, NV",
          address: "T-MOBILE ARENA",
        },
        {
          date: "AUG 7",
          place: "CONCORD, CA",
          address: "CONCORD PAVILION",
        },
      ];

      const listOfConcerts = Dummylist.map((list, index)=>
        <tr key={index}>
            <td>{list.date}</td>
            <td>{list.address}</td>
            <td>{list.place}</td>
            <td>
                <Button variant='primary'>Buy ticket</Button>
            </td>
        </tr>
      )

  return (
    <Container className='d-flex  p-2 w-50 text-center'>
        <Table className='table'>
            <thead>
              <tr>
                <th>Month</th>
                <th>Title</th>
                <th>Location</th>
                <th>TicketAction</th>
               </tr>
            </thead>
            <tbody>
                    {listOfConcerts}
            </tbody>
        </Table>
      
    </Container>
  )
}

export default Albumlist
