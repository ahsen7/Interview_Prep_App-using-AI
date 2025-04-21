import { cn } from '@/lib/utils';
import Image from 'next/image'
import React from 'react'


enum CallStatus {
    INACTIVE = 'INACTIVE',
    CONNECTING = 'CONNECTING',
    ACTIVE = 'ACTIVE',
    FINISHED = 'FINISHED'
}



const Agent = ({ userName }: AgentProps) => {
    const currentCallStatus = CallStatus.FINISHED
    const isSpeaking = true;
    const message = [
        'My name is Muhammad Ahsen. Nice to meet you!'
    ];

    const lastMessage = message[message.length - 1];
    return (
        <>
            <div className='call-view'>
                <div className='card-interviewer'>
                    <div className='avatar'>
                        <Image
                            src="/avatar.png"
                            alt='avatar'
                            width={85}
                            height={64}
                            className='object-cover'
                        />
                        {isSpeaking && <span className='animate-speak' />}
                    </div>
                    <h3>AI Interviewer</h3>
                </div>
                <div className='card-border'>
                    <div className='card-content'>
                        <Image
                            src='/user-avatar.png'
                            alt='user'
                            width={540}
                            height={540}
                            className='rounded-full object-cover size-[120px]'

                        />
                        <h3>{userName}</h3>
                    </div>
                </div>
            </div>
            {message.length > 0 && (
                <div className='transcript-border'>
                    <div className='transcript'>
                        <p className={cn('transition-opacity duration-500 opacity-0', 'animate-fadeIn opacity-100')} key={lastMessage}>
                            {lastMessage}
                        </p>
                    </div>
                </div>
            )}
            <div className="w-full flex justify-center">
                {currentCallStatus !== 'ACTIVE' ? (
                    <button className='relative btn-call'>
                        <span className={cn('absolute animate-ping rounded-full opacity-75', currentCallStatus !== 'CONNECTING' & 'hidden')} />

                        <span>
                            {currentCallStatus === 'INACTIVE' || currentCallStatus === 'FINISHED' ? 'Call' : '. . .'}
                        </span>
                    </button>
                ) : (
                    <button className='btn-disconnect'>
                        End
                    </button>
                )}

            </div>
        </>
    )
}

export default Agent