import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';

import Container from '../../components/container';
import { Loading } from './styles';

export default class Repository extends Component {
  static propTypes = PropTypes.shape({
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }),
  }).isRequired;
  state = {
    repository :{},
    issues:[],
    loading: true,
  };


  async componentDidMount(){
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues?state=open&per_page=5`, {
        params: {
          state: 'open',
          per_page: 5,
        }
      }),
    ]);

    this.setState({
      loading: false,
      repository: repository.data,
      issues: issues.data,
    });
  }

  render(){
    const { repository, issues, loading } = this.state;

    if(loading){
      return <Loading>Carregando</Loading>
    }

    return (
      <Container></Container>
    );
  }
}
