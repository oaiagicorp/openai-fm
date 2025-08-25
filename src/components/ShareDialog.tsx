import * as React from "react";
import { Dialog } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import { copyText } from "../lib/copyText";

const DialogDemo = ({
  shareUrl,
  open,
  onOpenChange,
}: {
  shareUrl: string | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => (
  <Dialog.Root onOpenChange={onOpenChange} open={open}>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/30 data-[state=open]:animate-overlayShow" />
      <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white dark:bg-gray-900 p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow">
        <Dialog.Title className="m-0 text-[17px] font-medium text-black dark:text-white">
          Share Link
        </Dialog.Title>
        <Dialog.Description className="mb-5 mt-2.5 text-[15px] leading-normal text-gray-700 dark:text-gray-300">
          Copy the link below to share with others.
        </Dialog.Description>
        <fieldset className="mb-[15px] flex items-center gap-5">
          <input
            className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none text-black dark:text-white shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
            id="name"
            defaultValue={shareUrl ?? ""}
          />
        </fieldset>
        <div className="mt-[25px] flex justify-end">
          <Dialog.Close asChild>
            <button
              className="cursor-pointer inline-flex h-[35px] items-center justify-center rounded bg-green4 dark:bg-green9 px-[15px] font-medium leading-none text-green11 dark:text-white outline-none outline-offset-1 hover:bg-green5 dark:hover:bg-green10 focus-visible:outline-2 focus-visible:outline-green6 select-none"
              onClick={() => {
                if (shareUrl) {
                  copyText(shareUrl);
                }
              }}
            >
              Copy
            </button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button
            className="cursor-pointer absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-violet11 dark:text-white bg-gray3 dark:bg-gray-700 hover:bg-violet4 dark:hover:bg-violet-700 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DialogDemo;
