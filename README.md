Mise en place is a French term for having all your ingredients measured, cut, peeled, sliced, grated, etc, before you start cooking. In the same light, *Mise UI* is a design system and component library for America's Test Kitchen.

The current state of the master branch can be viewed here: https://mise-ui.netlify.com

### To start the app:
Run `yarn run storybook` and wait for a browser window to open `localhost:9009`

### Storybook
Mise UI is a [Storybook](https://storybook.js.org) app built with [React](https://reactjs.org). Storybook is an isolated UI development environment for UI components. Stories are written in [Component Story Format (CSF)](https://storybook.js.org/docs/formats/component-story-format).

### Visual review
To review work with others, push your branch to `origin/staging`. Netlify will build and deploy to http://staging--mise-ui.netlify.com. The master branch is always viewable here: https://mise-ui.netlify.com

### Workflow

#### Create a branch
```git checkout -b create-avatar-list-component```

#### Code and commit
```git commit -am "Added AvatarList and stories"```

#### Document your code

add comments to your components which Storybook will use as documentation.

```
/**
 * A list of Avatars, ellipsized to at most 3. Supports passing only a subset of the total user count.
 */
export function AvatarList({ loading, users, userCount, size, ...props }) {
}

AvatarList.propTypes = {
  /**
   * Are we loading avatar data from the network?
   */
  loading: PropTypes.bool,
  /**
   * A (sub)-list of the users whose avatars we have data for. Note: only 3 will be displayed.
   */
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      avatarUrl: PropTypes.string,
    })
  ),
  /**
   * The total number of users, if a subset is passed to `users`.
   */
  userCount: PropTypes.number,
  /**
   * AvatarList comes in four sizes. In most cases, you’ll be fine with `medium`.
   */
  size: PropTypes.oneOf(Object.keys(sizes)),
};
```

Commit the changes and push to GitHub
```
git commit -am "Improved AvatarList docs"
git push -u origin `create-avatar-list-component`
```

### Create a PR

Create a Pull Request

The design system’s Storybook is automatically published each pull request to make review dead simple.
Scroll down to the PR checks, at the bottom of the PR, to find a link to the deployed Storybook.

You should look for something like `deploy/netlify - Deploy preview ready`

The online Storybook is a universal reference point for the team. Share the link to AvatarList with other stakeholders to get feedback faster.

#### Verify changes via tests

* Chromatic?
* Snapshots?
* Unit tests?

#### Distribute

When tests pass, stakeholders have reviewed and approved and other devs have given thumbs up it's time for the release.

To make sure the release is versioned properly on NPM, you will leverage labels on GitHub. Auto provides a list of labels that will affect
whether a new NPM release is a patch, minor or major release. Unsurprisingly, these labels are `patch`, `minor`, `major`. The full list of
labels can be found [here](https://github.com/Americastestkitchen/mise-ui/labels).

For example:
Add the `minor` label to the PR. This tells Auto to update the minor version of the package on merge.

Labels are located in the right hand column of the PR.

Next, merge your PR, and navigate to your package on npm and hang tight for a few minutes while the package is updated.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
