import Button from "@/components/common/Button/Button";
import Card, { CardActions, CardContent, CardHeader, CardMedia } from "@/components/common/Card/Card";
import Checkbox from "@/components/common/Checkbox/Checkbox";
import Flex from "@/components/common/Flex/Flex";
import Radio from "@/components/common/Radio/Radio";

import Counter from "@/components/Counter";
import ModalDemo from "@/components/ModalDemo";

import Paper from "@/components/common/Paper/Paper";
import TextField from "@/components/common/TextField/TextField";
import SelectField from "@/components/common/SelectField/SelectField";

export default function Home() {
  return (
    <div className="overflow-y-auto">
      <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-24">
        <div className="flex flex-col items-center gap-3 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Next.js Starter
          </h1>
          <p className="max-w-md text-lg text-muted-foreground">
            Built with TypeScript, Tailwind CSS, and Zustand.
          </p>
        </div>

        <Counter />

        <ModalDemo />

        <p className="text-sm text-muted-foreground">
          Edit{" "}
          <code className="rounded bg-surface-strong px-1.5 py-0.5 font-mono text-foreground">
            src/app/page.tsx
          </code>{" "}
          to get started.
        </p>


        <Radio name="disabled" label="Disabled" disabled />
        <Radio name="disabled" label="Disabled checked" disabled defaultChecked />



        <SelectField
          label="Age"
          options={[
            { value: 10, label: "Ten" },
            { value: 20, label: "Twenty" },
            { value: 30, label: "Thirty" },
          ]}
        />

        <TextField variant="outlined" label="Outlined" />
        <TextField variant="outlined" size="medium" />
        <TextField variant="outlined" size="small" />


        <Button variant="contained" size="large" fullWidth>
          Click me
        </Button>
        <Flex gap={2}>
          <Checkbox defaultChecked label="Remember me" />
          <Checkbox color="secondary" label="Option B" />
          <Checkbox color="error" indeterminate label="Select all (partial)" />
        </Flex>


        <Card>
          <CardMedia component="img" image="/photo.jpg" alt="Scenic view" height={200} />
          <CardHeader
            title="Card Title"
            subheader="September 14, 2025"
          />
          <CardContent>
            <p>
              This impressive paella is a perfect party dish and a fun meal to cook
              together with your guests.
            </p>
          </CardContent>
          <CardActions>
            <Button variant="text" size="small">Share</Button>
            <Button variant="text" size="small">Learn More</Button>
          </CardActions>
        </Card>


        <Card>
          <CardHeader
            avatar={<img src="/avatar.jpg" alt="User" width={40} height={40} style={{ borderRadius: "50%" }} />}
            title="John Doe"
            subheader="Software Engineer"
            action={<Button variant="text" size="small">Follow</Button>}
          />
          <CardContent>
            <p>Building things for the web.</p>
          </CardContent>
        </Card>


        <Flex gap={2}>
          <Radio name="demo" value="a" label="Option A" defaultChecked />
          <Radio name="demo" value="b" label="Option B" />
          <Radio name="demo-color" value="c" label="Secondary" color="secondary" />
          <Radio name="demo-color" value="d" label="Error" color="error" />
          <Radio name="demo-disabled" label="Disabled" disabled />
        </Flex>

        <Paper elevation={3}>Elevated content</Paper>
        <Paper variant="outlined">Outlined content</Paper>
        <Paper elevation={0} square>Flat, square paper</Paper>

      </div>
    </div>
  );
}
