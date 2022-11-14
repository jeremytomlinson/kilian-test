// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rcEGNgTfxT6W6gDjnxsJgN
// Component: WSF6ggVTXsP5F_
import * as React from "react";

import { Link, GatsbyLinkProps as LinkProps } from "gatsby";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Logo from "../../Logo"; // plasmic-import: W2OIIjnAg7iDkl/component
import Button from "../../Button"; // plasmic-import: so4bLs3WV--Rks/component

import { useScreenVariants as useScreenVariants_6RWdC4Qzz3IWjw } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 6RWdC4Qzz3IWjw/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import * as plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import * as projectcss from "./plasmic_new_habistack_com.module.css"; // plasmic-import: rcEGNgTfxT6W6gDjnxsJgN/projectcss
import * as sty from "./PlasmicNavbar.module.css"; // plasmic-import: WSF6ggVTXsP5F_/css

import AppleIcon from "./icons/PlasmicIcon__Apple"; // plasmic-import: fRP1Wu7C79b26c/icon

export type PlasmicNavbar__VariantMembers = {};
export type PlasmicNavbar__VariantsArgs = {};
type VariantPropType = keyof PlasmicNavbar__VariantsArgs;
export const PlasmicNavbar__VariantProps = new Array<VariantPropType>();

export type PlasmicNavbar__ArgsType = {};
type ArgPropType = keyof PlasmicNavbar__ArgsType;
export const PlasmicNavbar__ArgProps = new Array<ArgPropType>();

export type PlasmicNavbar__OverridesType = {
  root?: p.Flex<"div">;
  logo?: p.Flex<typeof Logo>;
  docs?: p.Flex<"a"> & Partial<LinkProps>;
  blog?: p.Flex<"a"> & Partial<LinkProps>;
  pricing?: p.Flex<"a"> & Partial<LinkProps>;
  pricing2?: p.Flex<"div">;
  logIn?: p.Flex<"a"> & Partial<LinkProps>;
  docs2?: p.Flex<"a"> & Partial<LinkProps>;
  blog2?: p.Flex<"a"> & Partial<LinkProps>;
  docs3?: p.Flex<"a"> & Partial<LinkProps>;
  blogs?: p.Flex<"a"> & Partial<LinkProps>;
  pricing5?: p.Flex<"a"> & Partial<LinkProps>;
  login?: p.Flex<"a"> & Partial<LinkProps>;
  logIn2?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultNavbarProps {
  className?: string;
}

function PlasmicNavbar__RenderFunc(props: {
  variants: PlasmicNavbar__VariantsArgs;
  args: PlasmicNavbar__ArgsType;
  overrides: PlasmicNavbar__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs = React.useMemo(() => [], [$props]);
  const $state = p.useDollarState(stateSpecs, $props);

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_6RWdC4Qzz3IWjw()
  });

  return (
    true ? (
      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          plasmic_library_plasmic_color_type_css.plasmic_tokens,
          sty.root
        )}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__zhap)}
        >
          <Logo
            data-plasmic-name={"logo"}
            data-plasmic-override={overrides.logo}
            className={classNames("__wab_instance", sty.logo)}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__f8Svv
            )}
          >
            {hasVariant(globalVariants, "screen", "mobileOnly")
              ? "fathym"
              : "fathym"}
          </div>

          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
          ) ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__e66Vf)}
            >
              <p.PlasmicLink
                data-plasmic-name={"docs"}
                data-plasmic-override={overrides.docs}
                className={classNames(projectcss.all, projectcss.a, sty.docs)}
                component={Link}
                href={"/forecast/docs/" as const}
                platform={"gatsby"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__tGy07
                  )}
                >
                  {"Docs"}
                </div>
              </p.PlasmicLink>

              {true ? (
                <p.PlasmicLink
                  data-plasmic-name={"blog"}
                  data-plasmic-override={overrides.blog}
                  className={classNames(projectcss.all, projectcss.a, sty.blog)}
                  component={Link}
                  href={"https://www.fathym.com/blog/" as const}
                  platform={"gatsby"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__tmRj
                    )}
                  >
                    {"Blog"}
                  </div>
                </p.PlasmicLink>
              ) : null}
              {true ? (
                <p.PlasmicLink
                  data-plasmic-name={"pricing"}
                  data-plasmic-override={overrides.pricing}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.pricing
                  )}
                  component={Link}
                  href={"https://www.fathym.com/pricing/" as const}
                  platform={"gatsby"}
                >
                  <div
                    data-plasmic-name={"pricing2"}
                    data-plasmic-override={overrides.pricing2}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.pricing2
                    )}
                  >
                    {"Pricing"}
                  </div>
                </p.PlasmicLink>
              ) : null}

              <p.PlasmicLink
                data-plasmic-name={"logIn"}
                data-plasmic-override={overrides.logIn}
                className={classNames(projectcss.all, projectcss.a, sty.logIn)}
                component={Link}
                href={"/dashboard/forecast/" as const}
                platform={"gatsby"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__tWhUo
                  )}
                >
                  {"Login"}
                </div>
              </p.PlasmicLink>

              {true ? (
                <Button
                  className={classNames("__wab_instance", sty.button___31Fjx)}
                  link={"/docs" as const}
                >
                  {null}
                </Button>
              ) : null}
              {true ? (
                <Button
                  className={classNames("__wab_instance", sty.button__nOj9I)}
                  link={"/blog" as const}
                >
                  {null}
                </Button>
              ) : null}
              {true ? (
                <Button
                  className={classNames("__wab_instance", sty.button__atsYx)}
                  link={"/dashboard" as const}
                >
                  {null}
                </Button>
              ) : null}
            </p.Stack>
          ) : null}

          <Button
            className={classNames("__wab_instance", sty.button__kggTb)}
            color={"blue" as const}
            link={"/dashboard/forecast/" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__xlM9
              )}
            >
              {hasVariant(globalVariants, "screen", "mobileOnly")
                ? "Start  for free"
                : "Get Started for Free"}
            </div>
          </Button>
        </p.Stack>

        {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : false) ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__eaAm1)}
          >
            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <p.PlasmicLink
                data-plasmic-name={"docs2"}
                data-plasmic-override={overrides.docs2}
                className={classNames(projectcss.all, projectcss.a, sty.docs2)}
                component={Link}
                href={"/docs" as const}
                platform={"gatsby"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__yetmh
                  )}
                >
                  {"Docs"}
                </div>
              </p.PlasmicLink>
            ) : null}
            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <p.PlasmicLink
                data-plasmic-name={"blog2"}
                data-plasmic-override={overrides.blog2}
                className={classNames(projectcss.all, projectcss.a, sty.blog2)}
                component={Link}
                href={"/blog" as const}
                platform={"gatsby"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___5Epwd
                  )}
                >
                  {"Blog"}
                </div>
              </p.PlasmicLink>
            ) : null}

            <p.PlasmicLink
              data-plasmic-name={"docs3"}
              data-plasmic-override={overrides.docs3}
              className={classNames(projectcss.all, projectcss.a, sty.docs3)}
              component={Link}
              href={"/forecast/docs" as const}
              platform={"gatsby"}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___28D8T
                )}
              >
                {"Docs"}
              </div>
            </p.PlasmicLink>

            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <p.PlasmicLink
                data-plasmic-name={"blogs"}
                data-plasmic-override={overrides.blogs}
                className={classNames(projectcss.all, projectcss.a, sty.blogs)}
                component={Link}
                href={"/blog/" as const}
                platform={"gatsby"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__wg2H1
                  )}
                >
                  {"Blog"}
                </div>
              </p.PlasmicLink>
            ) : null}
            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <p.PlasmicLink
                data-plasmic-name={"pricing5"}
                data-plasmic-override={overrides.pricing5}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.pricing5
                )}
                component={Link}
                href={"/pricing/" as const}
                platform={"gatsby"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__dd4X8
                  )}
                >
                  {"Pricing"}
                </div>
              </p.PlasmicLink>
            ) : null}

            <p.PlasmicLink
              data-plasmic-name={"login"}
              data-plasmic-override={overrides.login}
              className={classNames(projectcss.all, projectcss.a, sty.login)}
              component={Link}
              href={"/dashboard/forecast/" as const}
              platform={"gatsby"}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__eHvCm
                )}
              >
                {"Login"}
              </div>
            </p.PlasmicLink>

            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <p.PlasmicLink
                data-plasmic-name={"logIn2"}
                data-plasmic-override={overrides.logIn2}
                className={classNames(projectcss.all, projectcss.a, sty.logIn2)}
                component={Link}
                href={"/dashboard" as const}
                platform={"gatsby"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__dAg0O
                  )}
                >
                  {"Log in"}
                </div>
              </p.PlasmicLink>
            ) : null}
            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <Button
                className={classNames("__wab_instance", sty.button__i9Yg)}
                color={"white" as const}
                link={"/docs" as const}
              >
                {null}
              </Button>
            ) : null}
            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <Button
                className={classNames("__wab_instance", sty.button__pjIiO)}
                color={"white" as const}
                link={"/blog" as const}
              >
                {null}
              </Button>
            ) : null}
            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <Button
                className={classNames("__wab_instance", sty.button__dkDw8)}
                color={"white" as const}
                link={"/dashboard" as const}
              >
                {null}
              </Button>
            ) : null}
          </p.Stack>
        ) : null}
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "logo",
    "docs",
    "blog",
    "pricing",
    "pricing2",
    "logIn",
    "docs2",
    "blog2",
    "docs3",
    "blogs",
    "pricing5",
    "login",
    "logIn2"
  ],
  logo: ["logo"],
  docs: ["docs"],
  blog: ["blog"],
  pricing: ["pricing", "pricing2"],
  pricing2: ["pricing2"],
  logIn: ["logIn"],
  docs2: ["docs2"],
  blog2: ["blog2"],
  docs3: ["docs3"],
  blogs: ["blogs"],
  pricing5: ["pricing5"],
  login: ["login"],
  logIn2: ["logIn2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  logo: typeof Logo;
  docs: "a";
  blog: "a";
  pricing: "a";
  pricing2: "div";
  logIn: "a";
  docs2: "a";
  blog2: "a";
  docs3: "a";
  blogs: "a";
  pricing5: "a";
  login: "a";
  logIn2: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavbar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavbar__VariantsArgs;
    args?: PlasmicNavbar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavbar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNavbar__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicNavbar__ArgProps,
          internalVariantPropNames: PlasmicNavbar__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicNavbar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbar";
  } else {
    func.displayName = `PlasmicNavbar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbar = Object.assign(
  // Top-level PlasmicNavbar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    logo: makeNodeComponent("logo"),
    docs: makeNodeComponent("docs"),
    blog: makeNodeComponent("blog"),
    pricing: makeNodeComponent("pricing"),
    pricing2: makeNodeComponent("pricing2"),
    logIn: makeNodeComponent("logIn"),
    docs2: makeNodeComponent("docs2"),
    blog2: makeNodeComponent("blog2"),
    docs3: makeNodeComponent("docs3"),
    blogs: makeNodeComponent("blogs"),
    pricing5: makeNodeComponent("pricing5"),
    login: makeNodeComponent("login"),
    logIn2: makeNodeComponent("logIn2"),

    // Metadata about props expected for PlasmicNavbar
    internalVariantProps: PlasmicNavbar__VariantProps,
    internalArgProps: PlasmicNavbar__ArgProps
  }
);

export default PlasmicNavbar;
/* prettier-ignore-end */
