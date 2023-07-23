import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  Input,
  Label,
  Modal,
  TextField,
} from 'react-aria-components'
export function CommandMenu() {
  return (
    <DialogTrigger>
      <Button className={'rounded-3xl border px-3 py-1 z-10'}>
        Press me Search...
      </Button>
      <Modal>
        <Dialog>
          {({ close }) => (
            <form>
              <Heading>Sign up</Heading>
              <TextField autoFocus>
                <Label>First Name</Label>
                <Input />
              </TextField>
              <TextField>
                <Label>Last Name</Label>
                <Input />
              </TextField>
              <Button onPress={close}>Submit</Button>
            </form>
          )}
        </Dialog>
      </Modal>
    </DialogTrigger>
  )
}
