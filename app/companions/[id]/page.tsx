import CompanionComponent from '@/components/CompanionComponent';
import { getCompanion } from '@/lib/actions/companion.actions';
import { getSubjectColor } from '@/lib/utils';
import { currentUser } from '@clerk/nextjs/server';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';

interface CompanionSesstionPageProps {
    params: Promise<{ id: string }>
}

async function CompanionsSession({ params }: CompanionSesstionPageProps) {
    const { id } = await params;
    const companion = await getCompanion(id);
    const { name, subject, topic, title, duration } = companion;
    const user = await currentUser();

    if (!user) redirect('/sign-in');
    if (!name) redirect('/campanions');


    return (
        <main>
            <article className='flex rounded-border justify-between p-6 max-md:flex-col'>
                <div className='flex items-center gap-2'>
                    <div
                        style={{ backgroundColor: getSubjectColor(subject) }}
                        className='size-[72px] flex items-center justify-center rounded-lg max-md:hidden'
                    >
                        <Image width={35} height={35} src={`/icons/${subject}.svg`} alt={subject} />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-2'>
                            <p className='font-bold text-2xl'>
                                {name}
                            </p>
                            <div className='subject-badge max-sm:hidden'>
                                {subject}
                            </div>
                        </div>
                        <p className='text-lg'>
                            {topic}
                        </p>
                    </div>
                </div>
                <div className='items-start text-2xl max-md:hidden'>
                    {duration} minutes
                </div>
            </article>
            <CompanionComponent
                {...companion}
                companionId={id}
                userName={user.firstName!}
                userImage={user.imageUrl!}
            />
        </main>
    )
}

export default CompanionsSession