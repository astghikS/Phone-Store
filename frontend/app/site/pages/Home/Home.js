import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { PageContent } from 'components'
import Main from 'phone_store/Main'

import { flashSuccess } from 'site/actions'


class Home extends React.Component {
  componentWillMount() {
    if (window.location.search.indexOf('welcome') > 0) {
      this.props.flashSuccess('Welcome!')
    }
  }

  render() {
    return (
      <PageContent>
        <Main></Main>
      </PageContent>
    )
  }
}

export default connect(
  (state) => ({}),
  (dispatch) => bindActionCreators({ flashSuccess }, dispatch),
)(Home)
