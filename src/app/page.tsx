import type { ReactNode } from "react";

import Box from "@/components/common/Box/Box";
import Button from "@/components/common/Button/Button";
import Card, {
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from "@/components/common/Card/Card";
import Checkbox from "@/components/common/Checkbox/Checkbox";
import Flex from "@/components/common/Flex/Flex";
import Grid from "@/components/common/Grid/Grid";
import Paper from "@/components/common/Paper/Paper";
import Radio from "@/components/common/Radio/Radio";
import SelectField from "@/components/common/SelectField/SelectField";
import TextField from "@/components/common/TextField/TextField";

import ModalDemo from "@/components/ModalDemo";

type SectionProps = {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
};

function Section({ id, title, description, children }: SectionProps) {
  return (
    <section id={id} className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          {title}
        </h2>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      <Paper
        elevation={0}
        variant="outlined"
        className="flex flex-col gap-6 p-6"
      >
        {children}
      </Paper>
    </section>
  );
}

type SubExampleProps = {
  label: string;
  children: ReactNode;
};

function SubExample({ label, children }: SubExampleProps) {
  return (
    <div className="flex flex-col gap-1 p-1">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <Flex gap={12} wrap="wrap" align="center">
        {children}
      </Flex>
    </div>
  );
}

export default function Home() {
  return (
    <div className="overflow-y-auto">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-16">
        <header className="flex flex-col items-center gap-3 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Component Showcase
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            A gallery of every example component in this Next.js starter — built
            with TypeScript, Tailwind CSS, and Zustand.
          </p>
          <p className="text-sm text-muted-foreground">
            Edit{" "}
            <code className="rounded bg-surface-strong px-1.5 py-0.5 font-mono text-foreground">
              src/app/page.tsx
            </code>{" "}
            to get started.
          </p>
        </header>

        <Section
          id="buttons"
          title="Button"
          description="Variants, colors, sizes, icons, and loading states." 
        >
          <SubExample label="Variants">
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="text">Text</Button>
          </SubExample>

          <SubExample label="Colors">
            <Button variant="contained" color="primary">
              Primary
            </Button>
            <Button variant="contained" color="secondary">
              Secondary
            </Button>
            <Button variant="contained" color="error">
              Error
            </Button>
            <Button variant="outlined" color="secondary">
              Secondary
            </Button>
            <Button variant="outlined" color="error">
              Error
            </Button>
          </SubExample>

          <SubExample label="Sizes">
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
          </SubExample>

          <SubExample label="States">
            <Button disabled>Disabled</Button>
            <Button loading>Loading</Button>
            <Button disableElevation>No elevation</Button>
            <Button fullWidth>Full width</Button>
          </SubExample>
        </Section>

        <Section
          id="text-field"
          title="TextField"
          description="Text inputs in multiple variants, sizes, and states."
        >
          <SubExample label="Variants">
            <TextField variant="outlined" label="Outlined" />
            <TextField variant="filled" label="Filled" />
            <TextField variant="standard" label="Standard" />
          </SubExample>

          <SubExample label="Sizes">
            <TextField variant="outlined" size="small" label="Small" />
            <TextField variant="outlined" size="medium" label="Medium" />
          </SubExample>

          <SubExample label="States">
            <TextField
              variant="outlined"
              label="With helper"
              helperText="We'll never share it."
            />
            <TextField
              variant="outlined"
              label="Error"
              error
              helperText="Required field"
            />
            <TextField variant="outlined" label="Disabled" disabled />
            <TextField variant="outlined" label="Required" required />
          </SubExample>

          <SubExample label="Multiline">
            <TextField
              variant="outlined"
              label="Comments"
              multiline
              rows={3}
              placeholder="Type a longer message..."
            />
          </SubExample>
        </Section>

        <Section
          id="select-field"
          title="SelectField"
          description="Native select with consistent styling and helper text."
        >
          <SubExample label="Basic">
            <SelectField
              label="Age"
              options={[
                { value: 10, label: "Ten" },
                { value: 20, label: "Twenty" },
                { value: 30, label: "Thirty" },
              ]}
            />
            <SelectField
              label="Country"
              placeholder="Select a country"
              options={[
                { value: "us", label: "United States" },
                { value: "th", label: "Thailand" },
                { value: "jp", label: "Japan" },
              ]}
            />
          </SubExample>

          <SubExample label="Sizes & states">
            <SelectField
              size="small"
              label="Small"
              options={[
                { value: "a", label: "Option A" },
                { value: "b", label: "Option B" },
              ]}
            />
            <SelectField
              label="Disabled"
              disabled
              options={[{ value: "x", label: "Disabled" }]}
            />
            <SelectField
              label="Error"
              error
              helperText="Please choose one"
              options={[
                { value: "a", label: "Option A" },
                { value: "b", label: "Option B" },
              ]}
            />
          </SubExample>
        </Section>

        <Section
          id="checkbox"
          title="Checkbox"
          description="Selection control with primary, secondary, and error colors."
        >
          <SubExample label="Colors">
            <Checkbox defaultChecked label="Primary" />
            <Checkbox color="secondary" defaultChecked label="Secondary" />
            <Checkbox color="error" defaultChecked label="Error" />
          </SubExample>

          <SubExample label="States">
            <Checkbox label="Unchecked" />
            <Checkbox indeterminate label="Indeterminate" />
            <Checkbox disabled label="Disabled" />
            <Checkbox disabled defaultChecked label="Disabled checked" />
          </SubExample>
        </Section>

        <Section
          id="radio"
          title="Radio"
          description="Single-choice selection grouped by name."
        >
          <SubExample label="Group">
            <Radio name="demo" value="a" label="Option A" defaultChecked />
            <Radio name="demo" value="b" label="Option B" />
            <Radio name="demo" value="c" label="Option C" />
          </SubExample>

          <SubExample label="Colors">
            <Radio
              name="radio-color"
              label="Primary"
              defaultChecked
            />
            <Radio name="radio-color-2" label="Secondary" color="secondary" defaultChecked />
            <Radio name="radio-color-3" label="Error" color="error" defaultChecked />
          </SubExample>

          <SubExample label="States">
            <Radio name="radio-disabled" label="Disabled" disabled />
            <Radio
              name="radio-disabled-2"
              label="Disabled checked"
              disabled
              defaultChecked
            />
          </SubExample>
        </Section>

        <Section
          id="card"
          title="Card"
          description="Composable surfaces with media, header, content, and actions."
        >
          <Grid columns="repeat(auto-fit, minmax(260px, 1fr))" gap={16}>
            <Card>
              <CardMedia
                component="img"
                image="/photo.jpg"
                alt="Scenic view"
                height={180}
              />
              <CardHeader title="Card Title" subheader="September 14, 2025" />
              <CardContent>
                <p>
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests.
                </p>
              </CardContent>
              <CardActions>
                <Button variant="text" size="small">
                  Share
                </Button>
                <Button variant="text" size="small">
                  Learn More
                </Button>
              </CardActions>
            </Card>

            <Card>
              <CardHeader
                avatar={
                  <img
                    src="/avatar.jpg"
                    alt="User"
                    width={40}
                    height={40}
                    style={{ borderRadius: "50%" }}
                  />
                }
                title="John Doe"
                subheader="Software Engineer"
                action={
                  <Button variant="text" size="small">
                    Follow
                  </Button>
                }
              />
              <CardContent>
                <p>Building things for the web.</p>
              </CardContent>
            </Card>

            <Card variant="outlined" clickable>
              <CardHeader
                title="Outlined & clickable"
                subheader="Press or tab to focus"
              />
              <CardContent>
                <p>
                  Use the{" "}
                  <code className="font-mono text-sm">variant=&quot;outlined&quot;</code>{" "}
                  prop for a subtle, borderless surface.
                </p>
              </CardContent>
            </Card>
          </Grid>
        </Section>

        <Section
          id="paper"
          title="Paper"
          description="Surfaces with elevation or outlined variants."
        >
          <Grid columns="repeat(auto-fit, minmax(180px, 1fr))" gap={16}>
            <Paper elevation={0} className="p-4 text-center">
              elevation 0
            </Paper>
            <Paper elevation={1} className="p-4 text-center">
              elevation 1
            </Paper>
            <Paper elevation={3} className="p-4 text-center">
              elevation 3
            </Paper>
            <Paper elevation={8} className="p-4 text-center">
              elevation 8
            </Paper>
            <Paper variant="outlined" className="p-4 text-center">
              outlined
            </Paper>
            <Paper elevation={0} square className="p-4 text-center">
              square
            </Paper>
          </Grid>
        </Section>

        <Section
          id="layout"
          title="Layout — Box, Flex & Grid"
          description="Primitives for composing page layouts."
        >
          <SubExample label="Box (spacing & visual props)">
            <Box
              padding={16}
              borderRadius={8}
              bgcolor="var(--surface-strong)"
              color="var(--foreground)"
            >
              Padded box with rounded corners
            </Box>
            <Box
              padding={16}
              borderRadius={8}
              border="1px solid var(--border)"
              width={220}
            >
              Outlined fixed-width box
            </Box>
          </SubExample>

          <SubExample label="Flex (row & column)">
            <Flex gap={8} align="center">
              <Box padding={12} bgcolor="var(--surface-strong)" borderRadius={6}>
                A
              </Box>
              <Box padding={12} bgcolor="var(--surface-strong)" borderRadius={6}>
                B
              </Box>
              <Box padding={12} bgcolor="var(--surface-strong)" borderRadius={6}>
                C
              </Box>
            </Flex>
            <Flex column gap={8}>
              <Box padding={12} bgcolor="var(--surface-strong)" borderRadius={6}>
                Top
              </Box>
              <Box padding={12} bgcolor="var(--surface-strong)" borderRadius={6}>
                Middle
              </Box>
              <Box padding={12} bgcolor="var(--surface-strong)" borderRadius={6}>
                Bottom
              </Box>
            </Flex>
          </SubExample>

          <SubExample label="Grid (responsive columns)">
            <Grid
              columns="repeat(auto-fit, minmax(120px, 1fr))"
              gap={12}
              style={{ width: "100%" }}
            >
              {["One", "Two", "Three", "Four", "Five", "Six"].map((label) => (
                <Box
                  key={label}
                  padding={16}
                  bgcolor="var(--surface-strong)"
                  borderRadius={6}
                  style={{ textAlign: "center" }}
                >
                  {label}
                </Box>
              ))}
            </Grid>
          </SubExample>
        </Section>

        <Section
          id="modal"
          title="Modal"
          description="Portal-based dialog with backdrop, animations, and nesting."
        >
          <ModalDemo />
        </Section>
      </div>
    </div>
  );
}
