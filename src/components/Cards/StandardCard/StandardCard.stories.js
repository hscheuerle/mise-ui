import React from 'react';
import { action } from '@storybook/addon-actions';
import { StandardCard } from '../StandardCard';
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: 'Components|Cards/StandardCard',
  component: StandardCard,
  decorators: [withKnobs],
};

export const LoggedIn = () => (
  <StandardCard
    badgeType="atk"
    contentType="review"
    commentCount={5}
    ctaText={text("CTA text", "Buy the Winner")}
    ctaUrl="https://www.amazon.com/dp/B01JCNEJSO/?tag=ciosearchresult-20"
    displayFavoritesButton={true}
    imageAlt={text("Image alt text", "")}
    imageUrl={text("Image url", "https://res.cloudinary.com/hksqkdlah/image/upload/s--bab2_EML--/c_scale,dpr_2.0,f_auto,h_172,q_auto:low,w_172/40784_sil-food-storage-containers-rubbermaid-brilliance-food-storage-container-large-96-cup-1991158")}
    isFavorited={false}
    displayLockIcon={false}
    stickers={[{type: 'priority', text: 'New'}, {type: 'editorial', text: 'Trending'}]}
    displayCommentCount={true}
    onClick={action('favorites-click')}
    title={text("Title", "Plastic Food Storage Containers")}
    url="https://www.americastestkitchen.com/equipment_reviews/1879-plastic-food-storage-containers?ref=new_search_experience_2"
  />
);

export const LoggedOut = () => (
  <StandardCard
    badgeType="cio"
    contentType="collection"
    commentCount={1}
    displayFavoritesButton={false}
    displayLockIcon={true}
    stickers={[{type: 'priority', text: 'New'}, {type: 'editorial', text: 'Quick'}]}
    imageAlt={text("Image alt text", "")}
    imageUrl="https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_344/SFS_stir_fried_ground_pork_topping_congee-1_1_la51ps"
    displayCommentCount={true}
    title={text("Title", "Congee (Chinese Rice Porridge) with Stir-Fried Ground Pork")}
    url="https://www.cooksillustrated.com/recipes/12381-congee-chinese-rice-porridge-with-stir-fried-ground-pork?extcode=MASCD00L0&ref=new_search_experience_2"
  />
);

export const NoImage = () => (
  <StandardCard
    badgeType="cio"
    contentType="Cookbook Collection"
    commentCount={1}
    displayFavoritesButton={true}
    displayLockIcon={true}
    stickers={[{type: 'editorial', text: 'Make Ahead'}]}
    displayCommentCount={true}
    title={text("Title", "Congee (Chinese Rice Porridge) with Stir-Fried Ground Pork")}
    url="https://www.cooksillustrated.com/recipes/12381-congee-chinese-rice-porridge-with-stir-fried-ground-pork?extcode=MASCD00L0&ref=new_search_experience_2"
  />
);
