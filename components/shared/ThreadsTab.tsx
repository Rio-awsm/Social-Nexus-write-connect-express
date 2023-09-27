

interface Props {
    currentUserId: string;
    accountId: string;
    accountType: string;
  }

async function ThreadsTab({ currentUserId, accountId, accountType }: Props) {
  return (
    <section className='mt-9 flex flex-col gap-10'>
      Threads tab
    </section>
  )
}

export default ThreadsTab
