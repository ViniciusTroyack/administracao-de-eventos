import React from 'react'
import MenuProvider from './Menu'
import GetTogetherProvider from './Get-together'
import GraduationProvider from './Graduation'
import MarriageProvider from './Marriage'

export default function Providers({ children }) {
    return (
        <div>
            <MenuProvider>
                <GetTogetherProvider>
                    <GraduationProvider>
                        <MarriageProvider>
                            {children}
                        </MarriageProvider>
                    </GraduationProvider>
                </GetTogetherProvider>
            </MenuProvider>
        </div>
    )
}
