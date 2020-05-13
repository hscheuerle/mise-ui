import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledImage = styled.img`
  max-width: 100%;
`;

/**

All cards can include an image if one is associated with the piece of content in
question. Sometimes images can be photos, silos, no image... sometimes they can
be illustrations.

Specific document types have guidelines for the type of imagery we associate with them:
<ul>
<li>Recipe: Styled Food Shot (SFS)</li>
<li>Equipment Review: silo (in the future, SPS)</li>
<li>Taste Test: silo (in the future, SPS)</li>
<li>Episode: Candid (still from episode, showing “scene” with cast faces)</li>
<li>Class: SFS (in the future: instructor image with food)</li>
<li>Article: depends on content (SPS, SFS, illo, silo)</li>
<li>How To: depends on content (SFS, illo, silo)</li>
<li>Collection</li>
<li>Cookbook Collection: styled collage with SFS and book cover</li>
<li>Recipe Collection: collage of 4 recipe SFS</li>
<li>Cookbooks: Book image from shop (SPS)</li>
</ul>

-----

<br>

<b>Standard Card Image</b>
All standard cards can include an image if one is associated with the piece of
content in question. Sometimes images can be photos, sometimes they can be
illustrations. Standard cards use a square dimension.

*/

const Image = ({ imageAlt, imageUrl }) => (
  <StyledImage
    alt={imageAlt}
    src={imageUrl}
  />
);

Image.propTypes = {
  imageAlt: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Image;
