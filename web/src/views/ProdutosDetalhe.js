import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import HeaderBasico from "components/Headers/HeaderBasico.js";
import api          from "./../services/api";

class ProdutosDetalhe extends React.Component 
{

/*

{
    "GUUID": "1234",
    "CODIGO": "2",
    "DESCRICAO": "FEIJÃO PRETO654",
    "PRECO": 3.25,
    "NCM": 123,
    "ALIQUOTA": 20,
    "ST": 0,
    "STATUS": 0,
    "DATAALTERACAO": null
}
*/  

  state = 
  {
    _produto : {},
  }

  async componentDidMount()
  {

    // armazena o id do produto solicitado
    const { id } = this.props.match.params;

    // faz a pesquisa do produto na api
    const response = await api.get(`/produto/${id}`);

    // armazena o produto solicitado na variável de estado do componente
    this.setState({ _produto : response.data});

  }

  render()   
  {

    const { _produto } = this.state;

    return (

      <>
      
        <HeaderBasico />

        {/* Page content */}
        <Container className="mt--7" fluid>

          <Row>

            <Col className="order-xl-1" xl="12">

              <Card className="bg-secondary shadow">

                <CardHeader className="bg-white border-0">

                  <Row className="align-items-center">

                    <Col xs="8">
                      <h3 className="mb-0">CADASTRO DO PRODUTO</h3>
                    </Col>

                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        Configurações
                      </Button>
                    </Col>

                  </Row>

                </CardHeader>

                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      Dados Principais
                    </h6>
                    <div className="pl-lg-4">

                      <Row>
                        <Col md="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-codigo"
                            >
                              Código
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue=""
                              id="input-codigo"
                              placeholder="Código do Produto"
                              type="text"
                              value={_produto.CODIGO}
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-descricao"
                            >
                              Descrição
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue=""
                              id="input-descricao"
                              placeholder="Nome Completo do Produto"
                              type="text"
                              value={_produto.DESCRICAO}
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-ncm"
                            >
                              NCM
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue=""
                              id="input-ncm"
                              placeholder="NCM"
                              type="text"
                              value={_produto.NCM}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-preco"
                            >
                              Preço de Venda
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="0,00"
                              id="input-preco"
                              placeholder="Preço de Venda"
                              type="number"
                              value={_produto.PRECO}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-aliquota"
                            >
                              Alíquota de ICMS
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-aliquota"
                              placeholder="Alíquota de ICMS"
                              type="number"
                              value={_produto.ALIQUOTA}
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                    </div>

                  </Form>

                </CardBody>

                <CardHeader className="bg-white border-0">

                  <Row className="align-items-center">

                    <Col className="text-right" xs="12">
                      <Button
                      color="primary"
                      href="/admin/produtos"
                      size="sm"> Voltar 
                      </Button>
                    </Col>

                  </Row>

                </CardHeader>


              </Card>

            </Col>

          </Row>

        </Container>

      </>

    );
  }
}

export default ProdutosDetalhe;
