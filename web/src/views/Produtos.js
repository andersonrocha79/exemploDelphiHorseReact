import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row
} from "reactstrap";

// core components
import HeaderBasico from "components/Headers/HeaderBasico.js";
import api          from "./../services/api";
import  { Link }    from "react-router-dom";

class Produtos extends React.Component 
{

  state = 
  {
    _produto : []
  }

  async componentDidMount()
  {
    await api.get('/produto').then( res =>
    {
      this.setState({_produto : res.data});
    });
  }

  render()   
  {
    return (
      <>
        <HeaderBasico />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Lista de Produtos</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Código</th>
                      <th scope="col">Descrição</th>
                      <th scope="col">Preço</th>
                      <th scope="col">NCM</th>
                      <th scope="col">Alíquota</th>
                      <th scope="col">Detalhes</th>
                    </tr>
                  </thead>
                  <tbody>

                    {this.state._produto.map(pro => (
                        <tr>
                          <th scope="row"> {pro.CODIGO} </th>
                          <td> {pro.DESCRICAO} </td>
                          <td> {pro.PRECO} </td>
                          <td> {pro.NCM} </td>
                          <td> {pro.ALIQUOTA} </td>
                          <td> <Link to={`/produto/${pro.GUUID}`}>Detalhes</Link></td>
                        </tr>
                        
                      ))}

                  </tbody>
                </Table>
                <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Produtos;
