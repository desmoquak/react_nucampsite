import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class CampsiteInfo extends Component {
  renderComments(comments) {
    if (comments) {
      return (
        <div className="col-md-5 m-1">
          <h4>Comments</h4>
          {comments.map((c) => (
            <p key={c.id}>
              {c.text} <br />-{c.author}{' '}
              {new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'short',
                day: '2-digit',
              }).format(new Date(Date.parse(c.date)))}
            </p>
          ))}
        </div>
      );
    }
    return <div />;
  }

  renderCampsite(campsite) {
    return (
      <div className="col-md-5 m-1">
        <Card>
          <CardImg top src={campsite.image} alt={campsite.name} />
          <CardBody>
            <CardTitle>{campsite.name}</CardTitle>
            <CardText>{campsite.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
  render() {
    const campsite = this.props.campsite;
    if (campsite) {
      return (
        <div className="container">
          <div className="row">
            {this.renderCampsite(campsite)}
            {this.renderComments(campsite.comments)}
          </div>
        </div>
      );
    }
    return <div />;
  }
}
export default CampsiteInfo;
