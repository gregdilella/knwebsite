<script>
  import { Tabs } from "bits-ui";
  import * as Card from "$lib/components/ui/card";
</script>

<main class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
  <Tabs.Root value="Who" class="w-[400px]">
    <Tabs.List class="flex border-b border-gray-300">
      <Tabs.Trigger
        value="Who"
        class="p-4 border border-gray-300 border-b-0 rounded-t-md aria-selected:border-gray-500 aria-selected:text-blue-500"
      >
        Who
      </Tabs.Trigger>
      <Tabs.Trigger
        value="What"
        class="p-4 border border-gray-300 border-b-0 rounded-t-md aria-selected:border-gray-500 aria-selected:text-blue-500"
      >
        What
      </Tabs.Trigger>
      <Tabs.Trigger
        value="Where"
        class="p-4 border border-gray-300 border-b-0 rounded-t-md aria-selected:border-gray-500 aria-selected:text-blue-500"
      >
        Where
      </Tabs.Trigger>
      <Tabs.Trigger
        value="When"
        class="p-4 border border-gray-300 border-b-0 rounded-t-md aria-selected:border-gray-500 aria-selected:text-blue-500"
      >
        When
      </Tabs.Trigger>
      <Tabs.Trigger
        value="How"
        class="p-4 border border-gray-300 border-b-0 rounded-t-md aria-selected:border-gray-500 aria-selected:text-blue-500"
      >
        How
      </Tabs.Trigger>
    </Tabs.List>

    <Tabs.Content value="Who" class="border border-gray-300 p-4">
      <Card.Root>
        <Card.Header>
          <Card.Title>Who</Card.Title>
          <Card.Description>This is the "Who" tab</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>Details about "Who".</p>
        </Card.Content>
        <Card.Footer>
          <p>Footer content for "Who".</p>
        </Card.Footer>
      </Card.Root>
    </Tabs.Content>

    <Tabs.Content value="What" class="border border-gray-300 p-4">
      <Card.Root>
        <Card.Header>
          <Card.Title>What</Card.Title>
          <Card.Description>This is the "What" tab</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>Details about "What".</p>
        </Card.Content>
        <Card.Footer>
          <p>Footer content for "What".</p>
        </Card.Footer>
      </Card.Root>
    </Tabs.Content>

    <Tabs.Content value="Where" class="border border-gray-300 p-4">
      <Card.Root>
        <Card.Header>
          <Card.Title>Where</Card.Title>
          <Card.Description>This is the "Where" tab</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>Details about "Where".</p>
        </Card.Content>
        <Card.Footer>
          <p>Footer content for "Where".</p>
        </Card.Footer>
      </Card.Root>
    </Tabs.Content>

    <Tabs.Content value="When" class="border border-gray-300 p-4">
      <Card.Root>
        <Card.Header>
          <Card.Title>When</Card.Title>
          <Card.Description>This is the "When" tab</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>Details about "When".</p>
        </Card.Content>
        <Card.Footer>
          <p>Footer content for "When".</p>
        </Card.Footer>
      </Card.Root>
    </Tabs.Content>

    <Tabs.Content value="How" class="border border-gray-300 p-4">
      <Card.Root>
        <Card.Header>
          <Card.Title>How</Card.Title>
          <Card.Description>This is the "How" tab</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>Details about "How".</p>
        </Card.Content>
        <Card.Footer>
          <p>Footer content for "How".</p>
        </Card.Footer>
      </Card.Root>
    </Tabs.Content>
  </Tabs.Root>
</main>
